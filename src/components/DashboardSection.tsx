import { useEffect, useState } from "react";
import type { Period, AccountingCard } from "../types";
import BalanceCard from "./BalanceCard";
import { fetchAccountingData } from "../api/accounting";

type DashboardSectionProps = {
  period: Period;
};

const DashboardSection = ({ period }: DashboardSectionProps) => {
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

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error || !data) {
    return (
      <div className="text-center p-8">
        <p className="text-red-600 mb-4">データの取得に失敗しました</p>
        <button
          onClick={() => setRetryCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          再取得
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <BalanceCard title="収入" value={data.income} />
        <BalanceCard title="支出" value={data.expense} />
        <BalanceCard title="収支" value={data.income - data.expense} />
      </div>
    </>
  );
};

export default DashboardSection;
