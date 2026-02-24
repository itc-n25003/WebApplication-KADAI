import { getAllBorderScores } from "@/utils/getAllBorderScores";
import LeftIframe from "@/components/LeftIframe";
import BorderScoreTable from "@/components/BorderScoreTable";

type Props = {
  params: {
    serverNumber: string;
  };
};

export default async function ServerPage({ params }: Props) {
  const { serverNumber } = params;

  const allData = await getAllBorderScores();

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

  // ⭐ 現在の月を取得（例: "2月"）
  const now = new Date();
  const currentMonth = `${now.getMonth() + 1}月`;

  return (
    <div className="flex h-screen">
      {/* 左 */}
      <div className="w-1/2 border-r">
        <LeftIframe serverNumber={serverNumber} />
      </div>

      {/* 右 */}
      <div className="w-1/2 p-6 overflow-auto">
        <h1 className="text-xl font-bold mb-4">{filtered[0].server.server}</h1>

        <BorderScoreTable data={filtered} defaultMonth={currentMonth} />
      </div>
    </div>
  );
}
