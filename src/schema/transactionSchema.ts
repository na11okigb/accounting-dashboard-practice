import * as v from "valibot";

export const transactionSchema = v.object({
  type: v.picklist(["income", "expense"], "種別は必須です"),
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
