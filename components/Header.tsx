"use client";

import Link from "next/link";
import { useEffect } from "react";

type Server = {
  num: string;
  name: string;
};

type Props = {
  prevServer: Server | null;
  nextServer: Server | null;
};

declare global {
  interface Window {
    __KANCOLLE_COMMAND_ROOM__?: Window | null;
  }
}

export default function Header({ prevServer, nextServer }: Props) {
  const openCommandRoom = () => {
    const w = window.__KANCOLLE_COMMAND_ROOM__;

    // すでに開いていて、閉じられていない
    if (w && !w.closed) {
      w.focus(); // ⭐ リロードなし
      return;
    }

    // 初回 or 閉じられていた場合のみ open
    window.__KANCOLLE_COMMAND_ROOM__ = window.open(
      "https://play.games.dmm.com/game/kancolle",
      "kancolle-command-room",
    );
  };

  // ◀ ▶ キーボード操作
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevServer) {
        location.href = `/servers/${prevServer.num}`;
      }
      if (e.key === "ArrowRight" && nextServer) {
        location.href = `/servers/${nextServer.num}`;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prevServer, nextServer]);

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white/80 backdrop-blur">
      {/* 左 */}
      <div className="flex gap-4 items-center">
        <Link href="/" className="font-bold hover:underline">
          TOP
        </Link>

        {/* ⭐ 司令部 */}
        <button
          onClick={openCommandRoom}
          className="text-blue-600 hover:underline"
        >
          司令部
        </button>
      </div>

      {/* 右 */}
      <div className="flex gap-6">
        {prevServer && (
          <Link href={`/servers/${prevServer.num}`} className="hover:underline">
            ◀ {prevServer.name}
          </Link>
        )}
        {nextServer && (
          <Link href={`/servers/${nextServer.num}`} className="hover:underline">
            {nextServer.name} ▶
          </Link>
        )}
      </div>
    </header>
  );
}
