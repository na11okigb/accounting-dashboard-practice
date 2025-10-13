import { useForm } from "react-hook-form";
import { getCategoriesByType } from "../../../constants/transaction";
import { transactionSchema } from "../schemas/intex";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { FormData, FormInput } from "../types";

export const useTransactionForm = () => {
  const { register, handleSubmit, watch, setValue, reset, formState } =
    useForm<FormInput>({
      defaultValues: {
        type: "expense",
        amount: "",
        category: "",
        date: "",
        memo: "",
      },
      //resolver: valibotResolver(transactionSchema),
      resolver: valibotResolver<FormData>(transactionSchema),
      mode: "onSubmit",
      reValidateMode: "onChange",
    });

  const onSubmit = (data: FormData) => {
    console.log("フォームデータ:", data);
  };

  return {
    register,
    watch,
    setValue,
    reset,
    errors: formState.errors,
    categories: getCategoriesByType(watch("type")),
    onSubmit: handleSubmit(onSubmit),
  };
};
