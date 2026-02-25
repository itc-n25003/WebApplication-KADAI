import Link from "next/link";
import { getAllBorderScores } from "@/utils/getAllBorderScores";
import LeftIframe from "@/components/LeftIframe";
import BorderScoreTable from "@/components/BorderScoreTable";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

type Props = {
  params: {
    serverNumber: string;
  };
};

export default async function ServerPage({ params }: Props) {
  const { serverNumber } = params;
  const allData = await getAllBorderScores();

  const servers = Array.from(
    new Map(allData.map((d) => [d.server.serverNumber, d.server.server])),
  )
    .map(([num, name]) => ({ num, name }))
    .sort((a, b) => Number(a.num) - Number(b.num));

  const currentIndex = servers.findIndex((s) => s.num === serverNumber);
  const prevServer = currentIndex > 0 ? servers[currentIndex - 1] : null;
  const nextServer =
    currentIndex < servers.length - 1 ? servers[currentIndex + 1] : null;

  const filtered = allData
    .filter((d) => d.server.serverNumber === serverNumber)
    .sort((a, b) => {
      const yA = Number(a.year.year);
      const yB = Number(b.year.year);
      const mA = Number(a.month.month.replace("月", ""));
      const mB = Number(b.month.month.replace("月", ""));

      if (yA !== yB) return yB - yA;
      return mB - mA;
    });

  if (filtered.length === 0) {
    return <div className="p-8">データがありません</div>;
  }

  const now = new Date();
  const currentMonth = `${now.getMonth() + 1}月`;

  return (
    /* ===== 背景 ===== */
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(/BG-${serverNumber}.png)`,
      }}
    >
      {/* ===== 白オーバーレイ ===== */}
      <div className={styles.overlay}>
        <Header prevServer={prevServer} nextServer={nextServer} />
        <div className={styles.serverData}>
          <div className="flex flex-1">
            {/* 左 */}
            <div className={styles.IframeSize}>
              <LeftIframe serverNumber={serverNumber} />
            </div>

            {/* 右 */}
            <div>
              <h1 className="text-xl font-bold mb-4">
                {filtered[0].server.server}
              </h1>

              {/* ⭐ microCMS 表だけ白背景 */}
              <div className={styles.tableWrapper}>
                <BorderScoreTable data={filtered} defaultMonth={currentMonth} />
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-4 border-t">
              {prevServer ? (
                <Link
                  href={`/servers/${prevServer.num}`}
                  className="text-blue-600 hover:underline"
                >
                  ← {prevServer.name}
                </Link>
              ) : (
                <div />
              )}

              {nextServer ? (
                <Link
                  href={`/servers/${nextServer.num}`}
                  className="text-blue-600 hover:underline"
                >
                  {nextServer.name} →
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
