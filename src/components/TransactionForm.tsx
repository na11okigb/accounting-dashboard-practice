import { useState } from "react";

const TransactionForm = () => {
  const EXPENSE_CATEGORIES = [
    { value: "food", label: "食費" },
    { value: "transport", label: "交通費" },
    { value: "utilities", label: "光熱費" },
    { value: "entertainment", label: "娯楽費" },
    { value: "housing", label: "住居費" },
    { value: "other", label: "その他" },
  ];
  const [transactionType, setTransactionType] = useState("expense");

  console.log("現在の選択：", transactionType);
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">取引を登録</h2>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            種別
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              <span className="text-green-600">収入</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="expense"
                checked={transactionType === "expense"}
                onChange={(e) => setTransactionType(e.target.value)}
                defaultChecked
                className="mr-2"
              />
              <span className="text-red-600">支出</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            金額
          </label>
          <input
            id="amount"
            type="text"
            placeholder="1000"
            className="border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            カテゴリ
          </label>
          <select id="category" className="border p-2 rounded w-full">
            <option value="">選択してください</option>
            {EXPENSE_CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          登録
        </button>
      </form>
    </div>
  );
};
export default TransactionForm;
