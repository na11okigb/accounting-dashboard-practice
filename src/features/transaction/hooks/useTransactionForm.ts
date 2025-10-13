import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { transactionSchema, type TransactionFormInput } from "../schemas/intex";
import { getCategoriesByType } from "../../../constants/transaction";

export const useTransactionForm = () => {
  const { register, handleSubmit, watch, setValue, reset, formState } =
    useForm<TransactionFormInput>({
      defaultValues: {
        type: "expense",
        amount: "",
        category: "",
        date: "",
        memo: "",
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      resolver: valibotResolver(transactionSchema) as any,
      mode: "onSubmit",
      reValidateMode: "onChange",
    });

  const onSubmit = (data: TransactionFormInput) => {
    // 実行時にはnumberに変換されているが、型はstringのまま
    // これは既知の制限事項としてコメントで明記
    console.log("フォームデータ:", data);
    console.log("amount（実行時はnumber）:", typeof data.amount);

    // TODO: 将来的にZodへの移行を検討（React Hook Formとの統合が良好）
  };

  return {
    register,
    errors: formState.errors,
    watch,
    setValue,
    reset,
    categories: getCategoriesByType(watch("type")),
    onSubmit: handleSubmit(onSubmit),
  };
};
