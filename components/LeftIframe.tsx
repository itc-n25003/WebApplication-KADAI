import IframeSourceLink from "@/components/IframeSourceLink";

type Props = {
  serverNumber: string;
};

export default function LeftIframe({ serverNumber }: Props) {
  return (
    <div className="flex flex-col h-full">
      <iframe
        src={`https://senka.su/world?num=${serverNumber}`}
        className="w-full flex-1 border"
        loading="lazy"
      />

      <IframeSourceLink serverNumber={serverNumber} />
    </div>
  );
}
