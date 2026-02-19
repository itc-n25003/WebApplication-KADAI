import { microcmsClient } from "@/lib/microcms";

type Props = {
  serverNumber: string;
};

type BorderScore = {
  id: string;
  year: {
    year: string;
  };
  month: {
    month: string;
  };
  score1: number;
  score2: number;
  score3: number;
  score4: number;
};

export default async function MicrocmsTable({ serverNumber }: Props) {
  const data = await microcmsClient.getList<BorderScore>({
    endpoint: "borderscore",
    queries: {
      filters: `serverNumber[equals]${serverNumber}`,
      limit: 100,
    },
  });

  // ⭐ 年月の降順ソート
  const sortedContents = [...data.contents].sort((a, b) => {
    const yearA = Number(a.year.year);
    const yearB = Number(b.year.year);

    const monthA = Number(a.month.month.replace("月", ""));
    const monthB = Number(b.month.month.replace("月", ""));

    if (yearA !== yearB) {
      return yearB - yearA;
    }
    return monthB - monthA;
  });

  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">年月</th>
          <th className="border p-2">Score1</th>
          <th className="border p-2">Score2</th>
          <th className="border p-2">Score3</th>
          <th className="border p-2">Score4</th>
        </tr>
      </thead>
      <tbody>
        {sortedContents.map((item) => (
          <tr key={item.id}>
            <td className="border p-2">
              {item.year.year} / {item.month.month}
            </td>
            <td className="border p-2">{item.score1}</td>
            <td className="border p-2">{item.score2}</td>
            <td className="border p-2">{item.score3}</td>
            <td className="border p-2">{item.score4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
