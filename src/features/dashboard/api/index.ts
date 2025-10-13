import type { AccountingCard, Period } from "../types";

export const fetchAccountingData = async (
  period: Period
): Promise<AccountingCard> => {
  const response = await fetch(`/api/accounting?period=${period}`);

  if (!response.ok) {
    throw new Error("データの取得に失敗しました");
  }
  const data = await response.json();
  return data;
};
