"use client";
import styles from "./page.module.css";
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
  const openCommandRoom = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // ⭐ これが超重要

    const w = window.__KANCOLLE_COMMAND_ROOM__;

    // すでに開いていて、閉じられていない場合
    if (w && !w.closed) {
      w.focus(); // リロードなしでそのタブへ
      return;
    }

    // 初回 or 閉じられていた場合のみ新規タブ
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
    <header className={styles.headerStyle}>
      <div>
        {prevServer && <Link href={`/servers/${prevServer.num}`}>◀</Link>}
        サーバ移動
        {nextServer && <Link href={`/servers/${nextServer.num}`}>▶</Link>}
      </div>

      <div className={styles.headerLinks}>
        <Link href="/" className={styles.headerLink}>
          TOP
        </Link>

        {/* ⭐ 司令部リンク（別タブ・再利用） */}
        <a
          href="https://play.games.dmm.com/game/kancolle"
          onClick={openCommandRoom}
          className={styles.headerLink}
        >
          司令部（ゲームブラウザを開きます）
        </a>
      </div>
    </header>
  );
}
