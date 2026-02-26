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

  const currentMonth = `${new Date().getMonth() + 1}月`;

  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(/BG-${serverNumber}.png)` }}
    >
      <div className={styles.overlay}>
        <Header prevServer={prevServer} nextServer={nextServer} />

        {/*  横並びエリア */}
        <main className={styles.main}>
          {/* 左：引用 iframe */}
          <section className={styles.leftPane}>
            <LeftIframe serverNumber={serverNumber} />
          </section>

          {/* 右：microCMS */}
          <section className={styles.rightPane}>
            <h1 className={styles.serverTitle}>{filtered[0].server.server}</h1>

            <div className={styles.tableWrapper}>
              <BorderScoreTable data={filtered} defaultMonth={currentMonth} />
            </div>
          </section>
        </main>
        <div className={styles.nav}>
          {prevServer ? (
            <Link
              className={styles.serverLink}
              href={`/servers/${prevServer.num}`}
            >
              ← {prevServer.name}
            </Link>
          ) : (
            <span />
          )}

          {nextServer ? (
            <Link
              className={styles.serverLink}
              href={`/servers/${nextServer.num}`}
            >
              {nextServer.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
