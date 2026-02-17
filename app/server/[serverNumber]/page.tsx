import styles from "./page.module.css";
import Link from "next/link";
import { fetchMicroCMSData } from "@/app/_libs/microcms";
import { MicroCMSResponse, MicroCMSItem } from "@/app/types/border";
import LeftFrame from "@/app/components/LeftFrame";
import RightTable from "@/app/components/RightTable";

interface Props {
  params: { serverNumber: string };
}

export default async function ServerPage({ params }: Props) {
  const { serverNumber } = params;
  const data: MicroCMSResponse = await fetchMicroCMSData();

  // 現在ページのサーバーのデータだけ
  const filteredData: MicroCMSItem[] = data.contents.filter((item) =>
    item.server.some((s) => s.serverNumber === serverNumber),
  );

  // サーバー名マップ
  const serverMap = new Map<
    string,
    { serverNumber: string; serverName: string }
  >();
  data.contents.forEach((item) =>
    item.server.forEach((s) => {
      if (!serverMap.has(s.serverNumber)) {
        serverMap.set(s.serverNumber, {
          serverNumber: s.serverNumber,
          serverName: s.server,
        });
      }
    }),
  );

  const servers = Array.from(serverMap.values()).sort(
    (a, b) => Number(a.serverNumber) - Number(b.serverNumber),
  );
  const currentIndex = servers.findIndex(
    (s) => s.serverNumber === serverNumber,
  );
  const prevServer = currentIndex > 0 ? servers[currentIndex - 1] : null;
  const nextServer =
    currentIndex < servers.length - 1 ? servers[currentIndex + 1] : null;

  return (
    <main className="flex flex-col h-full">
      <div className={styles.linedData}>
        {/* 上部：iframe 高さ400px */}
        <div>
          <iframe
            src={`https://senka.su/world?num=${serverNumber}`}
            className={styles.pullsite}
            style={{
              zIndex: 1000,
            }}
          />
        </div>

        {/* 下部：microCMS 表 */}
        <div>
          {filteredData.length > 0 ? (
            <>
              <h2 className="text-xl font-bold mb-4">
                {filteredData[0].year.year}年 {filteredData[0].month.month}{" "}
                戦果ボーダー
              </h2>
              <RightTable data={filteredData} />
            </>
          ) : (
            <p>サーバー {serverNumber} のデータはありません。</p>
          )}
        </div>
      </div>
      {/* 下部：前後ボタン */}
      <div className={styles.pageother}>
        {prevServer ? (
          <Link
            className={styles.link}
            href={`/server/${prevServer.serverNumber}`}
          >
            ← {prevServer.serverName} ({prevServer.serverNumber})
          </Link>
        ) : (
          <div />
        )}

        {nextServer ? (
          <Link
            className={styles.link}
            href={`/server/${nextServer.serverNumber}`}
          >
            {nextServer.serverName} ({nextServer.serverNumber}) →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
