import Link from "next/link";
import { microcmsClient } from "@/lib/microcms";
import type { BorderScore } from "@/types/borderscore";

export default async function HomePage() {
  const data = await microcmsClient.getList<BorderScore>({
    endpoint: "borderscore",
    queries: {
      limit: 100,
      fields: "server.server,server.serverNumber",
    },
  });

  // serverNumber で重複除去
  const serverMap = new Map<string, string>();

  data.contents.forEach((item) => {
    serverMap.set(item.server.serverNumber, item.server.server);
  });

  // 昇順に並べる
  const servers = Array.from(serverMap.entries()).sort(
    ([a], [b]) => Number(a) - Number(b),
  );

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">サーバ一覧</h1>

      <ul className="space-y-2">
        {servers.map(([serverNumber, serverName]) => (
          <li key={serverNumber}>
            <Link
              href={`/servers/${serverNumber}`}
              className="text-blue-600 underline"
            >
              {serverName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
