import { useEffect, useState } from "react";
import type { Period, AccountingCard } from "../types";
import BalanceCard from "./BalanceCard";
import { fetchAccountingData } from "../api/accounting";
import { useAccountingData } from "../hooks/useAccountingData";

type DashboardSectionProps = {
  period: Period;
};

const DashboardSection = ({ period }: DashboardSectionProps) => {
  const [data, isLoading, error] = useAccountingData(period);

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
