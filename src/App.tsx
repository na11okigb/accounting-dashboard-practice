import { useState } from "react";
import DashboardSection from "./components/DashboardSection";
import type { Period } from "./types";
import PeriodSelector from "./components/PeriodSelector";

function App() {
  const [period, setPeriod] = useState<Period>("daily");
  return (
    <>
      <div className="min-h-screen p-8">
        <h1>会計ダッシュボード</h1>
        <PeriodSelector period={period} setPeriod={setPeriod} />
        <DashboardSection period={period} />
      </div>
    </>
  );
}

export default App;
