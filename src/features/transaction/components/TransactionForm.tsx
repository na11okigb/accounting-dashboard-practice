import { useTransactionForm } from "../hooks/useTransactionForm";

const TransactionForm = () => {
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    categories,
    onSubmit,
    reset,
  } = useTransactionForm();

  const typeRegister = register("type");

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">取引を登録</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            種別 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="income"
                {...register("type")}
                onChange={(e) => {
                  register("type").onChange(e);
                  setValue("category", "");
                }}
                className="mr-2"
              />
              <span className="text-green-600">収入</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="expense"
                {...register("type")}
                onChange={(e) => {
                  typeRegister.onChange(e);
                  setValue("category", "");
                }}
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
          >
            日付<span className="text-red-500">*</span>
          </label>
          <input
            id="date"
            type="date"
            {...register("date")}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            金額<span className="text-red-500">*</span>
          </label>
          <input
            id="amount"
            type="text"
            placeholder="1000"
            {...register("amount")}
            className={`border p-2 rounded ${
              errors.amount ? "border-red-500" : ""
            }`}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            カテゴリ<span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            {...register("category")}
            className="border p-2 rounded w-full"
          >
            <option value="">選択してください</option>
            {categories.map((category) => (
              <option key={category.label} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            備考
          </label>
          <textarea
            id="note"
            {...register("memo")}
            placeholder="備考"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex mt-4 gap-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            登録
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-orange-400 text-white p-2 rounded"
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};
export default TransactionForm;
