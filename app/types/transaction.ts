export type TransactionType =
  | "income"
  | "expense"
  | "transfer"
  | "investment"
  | "reserve";

export interface Transaction {
  id: string;

  type: TransactionType;

  description: string;

  category: string;

  value: number;

  date: string;

  paid: boolean;

  installments?: {
    current: number;
    total: number;
  };

  createdAt: string;
}