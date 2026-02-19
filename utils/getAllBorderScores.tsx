import { microcmsClient } from "@/lib/microcms";
import type { BorderScore } from "@/types/borderscore";

export async function getAllBorderScores() {
  const limit = 100;
  let offset = 0;
  let allContents: BorderScore[] = [];

  while (true) {
    const res = await microcmsClient.getList<BorderScore>({
      endpoint: "borderscore",
      queries: {
        limit,
        offset,
      },
    });

    allContents = allContents.concat(res.contents);

    if (res.contents.length < limit) {
      break;
    }

    offset += limit;
  }

  return allContents;
}
