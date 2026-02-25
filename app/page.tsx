import Link from "next/link";
import { microcmsClient } from "@/lib/microcms";
import type { BorderScore } from "@/types/borderscore";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default async function HomePage() {
  const data = await microcmsClient.getList<BorderScore>({
    endpoint: "borderscore",
    queries: {
      limit: 100,
      fields: "server.server,server.serverNumber",
    },
  });

  const serverMap = new Map<string, string>();
  data.contents.forEach((item) => {
    serverMap.set(item.server.serverNumber, item.server.server);
  });

  const servers = Array.from(serverMap.entries()).sort(
    ([a], [b]) => Number(a) - Number(b),
  );

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <h1 className={styles.serverTitle}>サーバ一覧</h1>

        <ul className={styles.serverGrid}>
          {servers.map(([serverNumber, serverName]) => (
            <li key={serverNumber} className={styles.serverItem}>
              <Link
                href={`/servers/${serverNumber}`}
                className="text-blue-700 hover:underline"
              >
                {serverName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
