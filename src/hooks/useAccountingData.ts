import { useEffect, useState } from "react";
import type { AccountingCard, Period } from "../types";
import { fetchAccountingData } from "../api/accounting";

export const useAccountingData = (period: Period) => {
  const [data, setData] = useState<AccountingCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
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

    return () => {
      isCancelled = true;
      console.log(`[${period}] クリーンアップ実行, isCancelled = true に設定`);
    };
  }, [period, retryCount]);

  return {
    data: data,
    isLoading: isLoading,
    error: error,
    retryCount: retryCount,
    setRetryCount: setRetryCount,
  };
};
