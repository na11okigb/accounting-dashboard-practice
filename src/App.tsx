import BalanceCard from "./components/BalanceCard";

function App() {
  return (
    <>
      <div className="min-h-screen p-8">
        <h1>会計ダッシュボード</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <BalanceCard income={10000} expenditure={7000} />
          <BalanceCard income={5000} expenditure={3000} />
          <BalanceCard income={8000} expenditure={9000} />
          <BalanceCard income={3000} expenditure={2000} />
        </div>
      </div>
    </>
  );
}

export default App;
