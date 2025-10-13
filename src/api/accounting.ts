import type { Period } from "../types";
import type { AccountingCard } from "../types/accountingCard";

// periodに応じたデータを返す
const mockData: Record<Period, AccountingCard> = {
  daily: { income: 10000, expense: 7000 },
  weekly: { income: 70000, expense: 45000 },
  monthly: { income: 300000, expense: 200000 },
  yearly: { income: 3600000, expense: 2400000 },
};

export const fetchAccountingData = async (
  period: Period
): Promise<AccountingCard> => {
  if (Math.random() < 0.3) {
    throw new Error("データの取得に失敗しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mockData[period];
};
