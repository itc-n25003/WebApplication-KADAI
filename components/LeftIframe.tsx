type Props = {
  serverNumber: string;
};

export default function LeftIframe({ serverNumber }: Props) {
  return (
    <iframe
      src={`https://senka.su/world?num=${serverNumber}`}
      className="w-full h-full border"
      loading="lazy"
    />
  );
}
