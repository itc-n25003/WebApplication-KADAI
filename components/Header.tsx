import Link from "next/link";

export default function Header() {
  return (
    <header className="h-14 border-b flex items-center px-6 gap-6 bg-white">
      {/* TOPページ */}
      <Link href="/" className="font-semibold text-blue-600 hover:underline">
        TOP
      </Link>

      {/* 司令部（外部リンク） */}
      <a
        href="https://play.games.dmm.com/game/kancolle"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 hover:underline"
      >
        司令部
      </a>
    </header>
  );
}
