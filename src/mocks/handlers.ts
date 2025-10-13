import { http, HttpResponse } from "msw";
import type { Period } from "../features/dashboard/types/period";
import type { AccountingCard } from "../features/dashboard/types/accountingCard";

// periodに応じたデータを返す
const mockData: Record<Period, AccountingCard> = {
  daily: { income: 10000, expense: 7000 },
  weekly: { income: 70000, expense: 45000 },
  monthly: { income: 300000, expense: 200000 },
  yearly: { income: 3600000, expense: 2400000 },
};

export const handlers = [
  http.get("/api/accounting", ({ request }) => {
    const url = new URL(request.url);
    const period = url.searchParams.get("period") as Period;

    if (Math.random() < 0.3) {
      throw new Error("データの取得に失敗しました");
    }

    return HttpResponse.json(mockData[period]);
  }),
];
