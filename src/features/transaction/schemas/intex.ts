import * as v from "valibot";

export const transactionSchema = v.object({
  type: v.picklist(["income", "expense"]),
  amount: v.pipe(
    v.string(),
    v.nonEmpty("金額は必須です"),
    v.transform((value) => Number(value)),
    v.number("金額は数値のみ入力してください"),
    v.minValue(1, "1円以上を入力してください")
  ),
  category: v.string(),
  date: v.string(),
  memo: v.string(),
});
