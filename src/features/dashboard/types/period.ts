export const PERIODS = {
  daily: "日次",
  weekly: "週次",
  monthly: "月次",
  yearly: "年次",
} as const;
export type Period = keyof typeof PERIODS;
