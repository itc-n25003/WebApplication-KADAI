"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ServerLink = {
  num: string;
  name: string;
} | null;

type Props = {
  prevServer: ServerLink;
  nextServer: ServerLink;
};

export default function Header({ prevServer, nextServer }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ◀ 左キー → 前のサーバ
      if (e.key === "ArrowLeft" && prevServer) {
        router.push(`/servers/${prevServer.num}`);
      }

      // ▶ 右キー → 次のサーバ
      if (e.key === "ArrowRight" && nextServer) {
        router.push(`/servers/${nextServer.num}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevServer, nextServer, router]);

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
      <div className="flex gap-4">
        <Link href="/" className="font-bold hover:underline">
          TOP
        </Link>
        <a
          href="https://play.games.dmm.com/game/kancolle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          司令部
        </a>
      </div>

      <div className="text-sm text-gray-500">◀ ▶ キーでサーバ切替</div>
    </header>
  );
}
