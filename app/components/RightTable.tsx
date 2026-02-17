import { MicroCMSItem } from "@/app/types/border";

interface Props {
  data: MicroCMSItem[];
}

export default function RightTable({ data }: Props) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full text-center">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2">順位</th>
          <th className="border border-gray-300 px-4 py-2">艦隊名</th>
          <th className="border border-gray-300 px-4 py-2">サーバー</th>
          <th className="border border-gray-300 px-4 py-2">スコア</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              {item.border.border}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {item.border.bordername}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {item.server.map((s) => s.server).join(", ")}
            </td>
            <td className="border border-gray-300 px-4 py-2">{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
