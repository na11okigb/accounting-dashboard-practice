import * as v from "valibot";

export const transactionSchema = v.object({
  type: v.picklist(["income", "expense"]),
  date: v.pipe(v.string(), v.nonEmpty("日付は必須です")),
  amount: v.pipe(
    v.string(),
    v.nonEmpty("金額は必須です"),
    v.transform((value) => Number(value)),
    v.number(),
    v.minValue(1, "1円以上を入力してください")
  ),
  category: v.pipe(v.string(), v.nonEmpty("カテゴリは必須です")),
  memo: v.optional(v.string()),
});

// Valibotから型を生成（これが真実の源）
export type TransactionFormInput = v.InferInput<typeof transactionSchema>;
export type TransactionFormOutput = v.InferOutput<typeof transactionSchema>;
