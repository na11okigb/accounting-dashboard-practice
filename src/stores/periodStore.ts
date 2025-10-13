import { create } from "zustand";
import type { Period } from "../types";

type PeriodStore = {
  // 状態
  period: Period;

  // アクション
  setPeriod: (period: Period) => void;
};

export const usePeriodStore = create<PeriodStore>((set) => ({
  // 初期値
  period: "daily",

  // periodを更新するアクション
  setPeriod: (period) => set({ period }),
}));
