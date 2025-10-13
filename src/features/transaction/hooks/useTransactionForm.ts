import { useForm } from "react-hook-form";
import { getCategoriesByType } from "../../../constants/transaction";
import { transactionSchema } from "../schemas/intex";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { FormData } from "../types";

export const useTransactionForm = () => {
  const { register, handleSubmit, watch, setValue, reset, formState } =
    useForm<FormData>({
      defaultValues: {
        type: "expense",
        amount: "",
        category: "",
        date: "",
        memo: "",
      },
      resolver: valibotResolver(transactionSchema),
      mode: "onSubmit",
      reValidateMode: "onChange",
    });

  const onSubmit = (data: FormData) => {
    console.log("フォームデータ:", data);
  };

  return {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    errors: formState.errors,
    categories: getCategoriesByType(watch("type")),
    onSubmit,
  };
};
