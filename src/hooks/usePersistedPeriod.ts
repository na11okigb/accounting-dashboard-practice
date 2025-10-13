import { useEffect, useState } from "react";
import type { Period } from "../types";

export const usePersistedPeriod = () => {
  const STORAGE_KEY = "selectedPeriod";

  const [period, setPeriod] = useState<Period>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored as Period;
    }
    return "daily";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, period);
  }, [period]);

  return { period, setPeriod };
};
