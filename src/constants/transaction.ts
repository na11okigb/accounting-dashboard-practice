export const TRANSACTION_TYPES = {
  income: "収入",
  expense: "支出",
} as const;

export const INCOME_CATEGORIES = {
  salary: "給料",
  bonus: "賞与",
  investment: "投資収益",
  other: "その他",
} as const;

export const EXPENSE_CATEGORIES = {
  food: "食費",
  transport: "交通費",
  utilities: "光熱費",
  entertainment: "娯楽費",
  housing: "住居費",
  other: "その他",
} as const;

export const getCategoriesByType = (type: "income" | "expense") => {
  return type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
};
