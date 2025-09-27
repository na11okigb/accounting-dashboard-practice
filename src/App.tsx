import DashboardSection from "./components/DashboardSection";
import PeriodSelector from "./components/PeriodSelector";
import { usePersistedPeriod } from "./hooks/usePersistedPeriod";

function App() {
  const { period, setPeriod } = usePersistedPeriod();
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
