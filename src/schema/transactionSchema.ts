import * as v from "valibot";

const testSchema = v.object({
  amount: v.number(),
});

const result1 = v.safeParse(testSchema, { amount: 1000 });
const result2 = v.safeParse(testSchema, { amount: "1000円" });

console.log("数値の場合:", result1);
console.log("文字列の場合:", result2);

if (!result2.success) {
  console.log("エラーの詳細:", {
    issues: result2.issues,
    firstError: result2.issues[0]?.message,
    expectedType: result2.issues[0]?.expected,
    actualValue: result2.issues[0]?.input,
  });
}

const amountSchema = v.pipe(
  v.string(),
  v.minLength(1),
  v.transform((value) => Number(value)),
  v.number()
);

const test3 = v.safeParse(amountSchema, "1000");
const test4 = v.safeParse(amountSchema, "千円");

console.log("文字列'1000'の場合:", test3);
console.log("文字列'千円'の場合:", test4);

const amountSchemaWithValidation = v.pipe(
  v.string(),
  v.nonEmpty("金額は必須です"),
  v.transform((value) => Number(value)),
  v.number(),
  v.minValue(0, "0以上の数値を入力してください")
);

const test5 = v.safeParse(amountSchemaWithValidation, "");
const test6 = v.safeParse(amountSchemaWithValidation, "1000");
const test7 = v.safeParse(amountSchemaWithValidation, "0");

console.log("空文字の場合:", test5);
console.log("'1000'の場合:", test6);
console.log("'0'の場合:", test7);
