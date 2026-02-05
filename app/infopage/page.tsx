import styles from "./page.module.css";
import ButtonLink from "@/app/ButtonLink";

export default function Page() {
  return (
    <>
      <iframe
        className={styles.pullsite}
        src="https://senka.su/world?num=1"
        style={{
          zIndex: 1000,
        }}
      />
      <div>
        <ButtonLink href="">横須賀鎮守府</ButtonLink>
      </div>
    </>
  );
}
