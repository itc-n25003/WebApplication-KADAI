export type BorderScore = {
  id: string;
  year: {
    year: string;
  };
  month: {
    month: string;
  };
  server: {
    server: string; // サーバ名
    serverNumber: string; // URL用
  };
  "border-TOP": string;
  "border-1": string;
  "border-2": string;
  "border-3": string;
};
