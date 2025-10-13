export type FormInput = {
  type: "income" | "expense";
  amount: string;
  category: string;
  date: string;
  memo: string;
};

export type FormData = {
  type: "income" | "expense";
  amount: number; // 変換後は数値！
  category: string;
  date: string;
  memo: string;
};
