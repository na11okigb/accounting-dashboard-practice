import DashboardSection from "./features/dashboard/components/DashboardSection";
import TransactionForm from "./features/transaction/components/TransactionForm";

function App() {
  return (
    <>
      <div className="min-h-screen p-8">
        <h1>会計ダッシュボード</h1>
        <DashboardSection />

        <div className="mt-8">
          <TransactionForm />
        </div>
      </div>
    </>
  );
}

export default App;
