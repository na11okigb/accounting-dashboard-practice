import { useState } from "react";
import { getCategoriesByType } from "../constants/transaction";

const TransactionForm = () => {
  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "expense"
  );

  const categories = getCategoriesByType(transactionType);

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
                onChange={() => setTransactionType("income")}
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
                onChange={() => setTransactionType("expense")}
                defaultChecked
                className="mr-2"
              />
              <span className="text-red-600">支出</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-2"
          ></label>
          <input id="date" type="date" className="border p-2 rounded w-full" />
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
            {categories.map((category) => (
              <option key={category.label} value={category.value}>
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
