export interface Server {
  id: string;
  server: string;
  serverNumber: string;
}

export interface Border {
  id: string;
  bordername: string;
  border: string;
}

export interface MicroCMSItem {
  id: string;
  year: { year: string };
  month: { month: string };
  server: Server[];
  border: Border;
  score: string;
}

export interface MicroCMSResponse {
  contents: MicroCMSItem[];
  totalCount: number;
  offset: number;
  limit: number;
}
