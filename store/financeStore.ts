import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Account {
  id: string;
  name: string;
  bank: string;
  balance: number;
  color: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  type: "income" | "expense";
  description: string;
  value: number;
  date: string;
}

interface FinanceStore {
  accounts: Account[];
  transactions: Transaction[];

  addAccount: (account: Account) => void;

  addTransaction: (transaction: Transaction) => void;

  removeTransaction: (id: string) => void;

  totalIncome: () => number;

  totalExpense: () => number;

  balance: () => number;
}

export const useFinanceStore = create<FinanceStore>()(
  persist(
    (set, get) => ({

      accounts: [
        {
          id: "inter",
          name: "Conta Principal",
          bank: "Inter",
          balance: 0,
          color: "#F97316",
        },
      ],

      transactions: [],

      addAccount: (account) =>
        set((state) => ({
          accounts: [...state.accounts, account],
        })),

      addTransaction: (transaction) =>
        set((state) => {

          const accounts = state.accounts.map((account) => {

            if (account.id !== transaction.accountId)
              return account;

            return {
              ...account,
              balance:
                transaction.type === "income"
                  ? account.balance + transaction.value
                  : account.balance - transaction.value,
            };

          });

          return {
            accounts,
            transactions: [...state.transactions, transaction],
          };

        }),

      removeTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter(
            (item) => item.id !== id
          ),
        })),

      totalIncome: () =>
        get()
          .transactions
          .filter((t) => t.type === "income")
          .reduce((acc, item) => acc + item.value, 0),

      totalExpense: () =>
        get()
          .transactions
          .filter((t) => t.type === "expense")
          .reduce((acc, item) => acc + item.value, 0),

      balance: () =>
        get().accounts.reduce(
          (total, account) => total + account.balance,
          0
        ),

    }),
    {
      name: "finpilot-storage",
    }
  )
);