type BalanceCardProps = {
  income: number;
  expenditure: number;
};

const BalanceCard = ({ income, expenditure }: BalanceCardProps) => {
  const balanceColor = () => {
    return income - expenditure >= 0 ? `text-green-500` : `text-red-500`;
  };

  return (
    <>
      <div className="rounded bg-gray-200 w-64 p-5 shadow-md">
        <h4>収支</h4>
        <span className={`${balanceColor()}`}>{income - expenditure}円</span>
      </div>
    </>
  );
};

export default BalanceCard;
