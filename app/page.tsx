import styles from "./page.module.css";
import ButtonLink from "./ButtonLink";

export default function Page() {
  return (
    <>
      <div className={styles.grid}>
        <ButtonLink href="info/page.tsx">横須賀鎮守府</ButtonLink>
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
      </div>
    </>
  );
}
