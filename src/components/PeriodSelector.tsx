import React from "react";
import { PERIODS, type Period } from "../types";

const PERIOD_OPTIONS = Object.entries(PERIODS).map(([key, label]) => ({
  value: key as Period,
  label: label,
}));

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
