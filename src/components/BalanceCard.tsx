type BalanceCardProps = {
  title: string;
  value: number;
};

const BalanceCard = ({ title, value }: BalanceCardProps) => {
  const balanceColor = () => {
    return value >= 0 ? `text-green-500` : `text-red-500`;
  };

  return (
    <>
      <div className="rounded bg-gray-200 w-full md:flex-1 p-4 shadow-md">
        <h4>{title}</h4>
        <span className={`${balanceColor()}`}>{value}円</span>
      </div>
    </>
  );
};

export default BalanceCard;
