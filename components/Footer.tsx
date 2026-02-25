export default function Footer() {
  return (
    <footer className="border-t mt-8 py-6 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        <p className="font-semibold mb-2">公式・有志攻略サイト</p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href="https://www.dmm.com/netgame/feature/kancolle.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              艦これ公式
            </a>
          </li>

          <li>
            <a
              href="https://senka.su"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Senka Viewer
            </a>
          </li>

          <li>
            <a
              href="https://zekamashi.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ぜかましねっと
            </a>
          </li>

          <li>
            <a
              href="https://kitongame.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              キトンの艦これ攻略ブログ
            </a>
          </li>

          <li>
            <a
              href="https://noro6.github.io/kc-web/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              制空権シミュレーター
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
