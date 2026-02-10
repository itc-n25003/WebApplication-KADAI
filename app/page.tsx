import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function Page() {
  return (
    <>
      <Image
        className={styles.topimage}
        src="/topimage.png"
        alt="後で差し替え"
        width={1200}
        height={450}
      />
      <div className={styles.grid}>
        <Image
          className={styles.bg}
          src="/drop_bg_blue.png"
          alt=""
          width={800}
          height={480}
        />
        <ButtonLink href="/infopage/">横須賀鎮守府</ButtonLink>
        <ButtonLink href="info/page.tsx">呉鎮守府</ButtonLink>
        <ButtonLink href="info/page.tsx">佐世保鎮守府</ButtonLink>
        <ButtonLink href="info/page.tsx">舞鶴鎮守府</ButtonLink>
        <ButtonLink href="info/page.tsx">大湊警備府</ButtonLink>
        <ButtonLink href="info/page.tsx">トラック泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">リンガ泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">ラバウル基地</ButtonLink>
        <ButtonLink href="info/page.tsx">リンガ泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">ショートランド泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">ブイン基地</ButtonLink>
        <ButtonLink href="info/page.tsx">タウイタウイ泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">パラオ泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">ブルネイ泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">単冠湾泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">幌筵泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">鹿屋泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">岩川基地</ButtonLink>
        <ButtonLink href="info/page.tsx">佐伯湾泊地</ButtonLink>
        <ButtonLink href="info/page.tsx">柱島泊地</ButtonLink>
      </div>
    </>
  );
}
