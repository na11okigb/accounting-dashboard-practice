import { useState } from "react";
import DashboardSection from "./components/DashboardSection";
import type { Period } from "./types";

function App() {
  const [period, setPeriod] = useState<Period>("daily");
  return (
    <>
      <div className="min-h-screen p-8">
        <h1>会計ダッシュボード</h1>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as Period)}
          className="mb-4 p-2 border rounded"
        >
          <option value="daily">日次</option>
          <option value="weekly">週次</option>
          <option value="monthly">月次</option>
          <option value="yearly">年次</option>{" "}
        </select>

        <DashboardSection period={period} />
      </div>
    </>
  );
}

export default App;
