import Link from "next/link";
import { fetchMicroCMSData } from "@/app/_libs/microcms";
import { MicroCMSResponse } from "@/app/types/border";

export default async function HomePage() {
  const data: MicroCMSResponse = await fetchMicroCMSData();

  // 重複除いたサーバーリスト
  const servers = Array.from(
    new Map(
      data.contents
        .flatMap((item) => item.server)
        .map((s) => [s.serverNumber, s]),
    ).values(),
  );

  return (
    <main className="p-4">
      <ul className="space-y-2">
        {servers.map((s) => (
          <li key={s.id}>
            <Link
              className="text-blue-600 underline"
              href={`/server/${s.serverNumber}`}
            >
              {s.server} ({s.serverNumber})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
