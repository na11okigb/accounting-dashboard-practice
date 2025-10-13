import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  transactionSchema,
  type TransactionInput,
  type TransactionOutput,
} from "../schemas/intex";
export const useTransactionForm = () => {
  const { register, handleSubmit, watch, setValue, reset, formState } = useForm<
    TransactionInput,
    TransactionOutput
  >({
    //     ↑入力型        ↑context  ↑出力型
    defaultValues: {
      type: "expense",
      amount: "", // string
      category: "",
      date: "",
      memo: "",
    },
    resolver: valibotResolver(transactionSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: TransactionOutput) => {
    console.log("データ:", data);
    console.log("amountの型:", typeof data.amount); // number
  };

  return {
    register,
    errors: formState.errors,
    watch,
    setValue,
    reset,
    onSubmit: handleSubmit(onSubmit),
  };
};
