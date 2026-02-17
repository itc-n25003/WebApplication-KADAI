"use client";

import { useState, useMemo } from "react";
import { MicroCMSItem } from "@/app/types/border";
import LeftFrame from "@/app/components/LeftFrame";
import RightTable from "@/app/components/RightTable";
interface Props {
  data: MicroCMSItem[];
}

export default function ServerSelector({ data }: Props) {
  // サーバーリスト作成（重複除去）
  const servers = useMemo(() => {
    const s = data.flatMap((item) => item.server);
    return Array.from(new Map(s.map((sv) => [sv.serverNumber, sv])).values());
  }, [data]);

  const [selectedServer, setSelectedServer] = useState(
    servers[0]?.serverNumber || "1",
  );

  // 選択されたサーバーだけのデータ
  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.server.some((s) => s.serverNumber === selectedServer),
      ),
    [data, selectedServer],
  );

  return (
    <div className="flex h-full">
      {/* 左側 iframe */}
      <div className="w-1/2 flex flex-col border-r">
        <select
          className="p-2 border mb-2"
          value={selectedServer}
          onChange={(e) => setSelectedServer(e.target.value)}
        >
          {servers.map((s) => (
            <option key={s.id} value={s.serverNumber}>
              {s.server} ({s.serverNumber})
            </option>
          ))}
        </select>

        <div className="flex-1">
          <LeftFrame serverNumber={selectedServer} />
        </div>
      </div>

      {/* 右側フィルタ済み表 */}
      <div className="w-1/2 p-4 overflow-auto">
        <h2 className="text-xl font-bold mb-4">
          {filteredData[0]?.year.year}年 {filteredData[0]?.month.month}{" "}
          戦果ボーダー
        </h2>
        <RightTable data={filteredData} />
      </div>
    </div>
  );
}
