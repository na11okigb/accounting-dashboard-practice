import DashboardSection from "./components/DashboardSection";
import PeriodSelector from "./components/PeriodSelector";
import { usePeriodStore } from "./stores/periodStore";

function App() {
  return (
    <>
      <div className="min-h-screen p-8">
        <h1>会計ダッシュボード</h1>
        <PeriodSelector />
        <DashboardSection />
      </div>
    </>
  );
}

export default App;
