import styles from "./page.module.css";
import IframeSourceLink from "@/components/IframeSourceLink";

type Props = {
  serverNumber: string;
};

export default function LeftIframe({ serverNumber }: Props) {
  return (
    <div className="flex flex-col h-full">
      <iframe
        src={`https://senka.su/world?num=${serverNumber}`}
        className={styles.IframeSize}
        loading="lazy"
      />

      <IframeSourceLink serverNumber={serverNumber} />
    </div>
  );
}
