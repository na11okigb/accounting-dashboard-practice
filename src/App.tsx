import DashboardSection from "./components/DashboardSection";
import PeriodSelector from "./components/PeriodSelector";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <>
      <div className="min-h-screen p-8">
        <h1>会計ダッシュボード</h1>
        <PeriodSelector />
        <DashboardSection />

        <div className="mt-8">
          <TransactionForm />
        </div>
      </div>
    </>
  );
}

export default App;
