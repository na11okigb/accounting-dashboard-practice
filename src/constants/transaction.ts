export const TRANSACTION_TYPES = {
  income: "収入",
  expense: "支出",
} as const;

export const INCOME_CATEGORIES = [
  { value: "salary", label: "給料" },
  { value: "bonus", label: "賞与" },
  { value: "investment", label: "投資収益" },
  { value: "other", label: "その他" },
] as const;

export const EXPENSE_CATEGORIES = [
  { value: "food", label: "食費" },
  { value: "transport", label: "交通費" },
  { value: "utilities", label: "光熱費" },
  { value: "entertainment", label: "娯楽費" },
  { value: "housing", label: "住居費" },
  { value: "other", label: "その他" },
] as const;

export const getCategoriesByType = (type: "income" | "expense") => {
  return type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
};
