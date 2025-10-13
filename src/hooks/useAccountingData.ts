import { useEffect, useState } from "react";
import type { AccountingCard, Period } from "../types";
import { fetchAccountingData } from "../api/accounting";

export const useAccountingData = (period: Period) => {
  console.log("1. useAccountingData関数が呼ばれた");

  const [data, setData] = useState<AccountingCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    console.log("2. useEffect内部が実行された");
    let isCancelled = false;
    const fetchData = async () => {
      console.log("2-1. fetchData開始");
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchAccountingData(period);

        if (!isCancelled) {
          setData(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "予期しないエラーが発生しました"
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
    console.log("2-3. fetchData呼び出し後（非同期なので待たない）");
    return () => {
      isCancelled = true;
      console.log(`[${period}] クリーンアップ実行, isCancelled = true に設定`);
    };
  }, [period, retryCount]);

  console.log("3. returnの直前");
  return {
    data: data,
    isLoading: isLoading,
    error: error,
    retryCount: retryCount,
    setRetryCount: setRetryCount,
  };
};
