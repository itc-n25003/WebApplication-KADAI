"use client";

interface LeftFrameProps {
  serverNumber: string | number;
}

export default function LeftFrame({ serverNumber }: LeftFrameProps) {
  const url = `https://senka.su/world?num=${serverNumber}`;

  return (
    <div className="w-full h-full">
      <iframe
        src={url}
        className="w-full h-full border-none"
        title={`Senka ${serverNumber}`}
      />
    </div>
  );
}
