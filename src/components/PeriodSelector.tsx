import { PERIODS, type Period } from "../types";
import { usePeriodStore } from "../stores/periodStore";

const PERIOD_OPTIONS = Object.entries(PERIODS).map(([key, label]) => ({
  value: key as Period,
  label: label,
}));

const PeriodSelector = () => {
  const { period, setPeriod } = usePeriodStore();
  return (
    <select
      value={period}
      onChange={(e) => setPeriod(e.target.value as Period)}
      className="mb-4 p-2 border rounded"
    >
      {PERIOD_OPTIONS.map((it) => (
        <option key={it.label} value={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
};

export default PeriodSelector;
