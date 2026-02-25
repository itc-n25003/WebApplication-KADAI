type Props = {
  serverNumber: string;
};

export default function IframeSourceLink({ serverNumber }: Props) {
  const url = `https://senka.su/world?num=${serverNumber}`;

  return (
    <div className="text-sm text-gray-600 mt-2 px-2">
      出典：
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-blue-600 hover:underline"
      >
        senka.su
      </a>
    </div>
  );
}
