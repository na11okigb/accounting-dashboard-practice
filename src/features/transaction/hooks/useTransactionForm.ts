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
    onSubmit,
  };
};
