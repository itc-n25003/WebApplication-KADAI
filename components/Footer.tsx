import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.ExternalSite}>
        <p className="font-semibold mb-2">公式・有志攻略サイト</p>

        <ul>
          <li className={styles.footerList}>
            <a href="https://www.dmm.com/netgame/feature/kancolle.html">
              艦これ公式
            </a>
          </li>

          <li className={styles.footerList}>
            <a href="https://senka.su">Senka Viewer</a>
          </li>

          <li className={styles.footerList}>
            <a href="https://zekamashi.net/">ぜかましねっと</a>
          </li>

          <li className={styles.footerList}>
            <a href="https://kitongame.com/">キトンの艦これ攻略ブログ</a>
          </li>

          <li className={styles.footerList}>
            <a href="https://noro6.github.io/kc-web/#/">制空権シミュレーター</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
