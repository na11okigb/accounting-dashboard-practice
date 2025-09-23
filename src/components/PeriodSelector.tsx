import React from "react";
import type { Period } from "../types";

const PERIOD_OPTIONS = [
  { value: "daily", label: "日次" },
  { value: "weekly", label: "週次" },
  { value: "monthly", label: "月次" },
  { value: "yearly", label: "年次" },
];

type periodSelectorProps = {
  period: Period;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
};

const PeriodSelector = ({ period, setPeriod }: periodSelectorProps) => {
  return (
    <select
      value={period}
      onChange={(e) => setPeriod(e.target.value as Period)}
      className="mb-4 p-2 border rounded"
    >
      {PERIOD_OPTIONS.map((it) => (
        <option value={it.value}>{it.label}</option>
      ))}
    </select>
  );
};

export default PeriodSelector;
