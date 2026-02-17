import { MicroCMSResponse } from "@/app/types/border";

const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;
const ENDPOINT = "borderscore";

export async function fetchMicroCMSData(): Promise<MicroCMSResponse> {
  if (!MICROCMS_API_KEY || !MICROCMS_SERVICE_DOMAIN) {
    throw new Error("microCMS の環境変数が設定されていません");
  }

  const res = await fetch(
    `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${ENDPOINT}?limit=100`,
    {
      headers: {
        "X-API-KEY": MICROCMS_API_KEY,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`microCMS API エラー: ${res.status}`);
  }

  const data: MicroCMSResponse = await res.json();
  return data;
}
