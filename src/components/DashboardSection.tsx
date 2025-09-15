import type { Period } from "../types";
import BalanceCard from "./BalanceCard";

type DashboardSectionProps = {
  period: Period;
};

const DashboardSection = ({ period }: DashboardSectionProps) => {
  //収入、支出、収支を取得してくる処理を書く
  //計算が必要な値はこのコンポーネントで行い、BalanceCardに渡す
  const getData = () => {
    if (period === "daily") {
      return { income: 10000, expense: 7000 };
    } else if (period === "weekly") {
      return { income: 70000, expense: 45000 };
    } else if (period === "monthly") {
      return { income: 300000, expense: 200000 };
    } else {
      return { income: 3600000, expense: 2400000 };
    }
  };
  const data = getData();
  const balance = data.income - data.expense;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <BalanceCard title="収入" value={data.income} />
        <BalanceCard title="支出" value={data.expense} />
        <BalanceCard title="収支" value={balance} />
      </div>
    </>
  );
};

export default DashboardSection;
