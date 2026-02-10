import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/ButtonLink";

export default function Page() {
  return (
    <>
      <div className={styles.grid}>
        <Image
          className={styles.bg}
          src="/drop_bg_blue.png"
          alt=""
          width={800}
          height={480}
        />
        <iframe
          className={styles.pullsite}
          src="https://senka.su/world?num=1"
          style={{
            zIndex: 1000,
          }}
        />
      </div>
      <div className={styles.otherpage}>
        <a className={styles.link} href="">
          ⇠柱島泊地
        </a>
        <a className={styles.link} href="/..">
          TOP PAGE
        </a>
        <a className={styles.link} href="">
          呉鎮守府⇢
        </a>
      </div>
    </>
  );
}
