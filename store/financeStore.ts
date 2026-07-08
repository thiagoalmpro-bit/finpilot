import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Account {
  id: string;
  name: string;
  balance: number;
  icon: string;
}

export interface Transaction {
  id: string;
  type: "income" | "expense";
  description: string;
  value: number;
  date: string;
  category?: string;
  accountId: string;
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
          id: "wallet",
          name: "Carteira",
          balance: 0,
          icon: "wallet",
        },

        {
          id: "inter",
          name: "Inter",
          balance: 0,
          icon: "inter",
        },

        {
          id: "nubank",
          name: "Nubank",
          balance: 0,
          icon: "nubank",
        },

        {
          id: "caixa",
          name: "Caixa",
          balance: 0,
          icon: "caixa",
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

            if (account.id !== transaction.accountId) {
              return account;
            }

            return {
              ...account,
              balance:
                transaction.type === "income"
                  ? account.balance + transaction.value
                  : account.balance - transaction.value,
            };
          });

          return {
            transactions: [
              ...state.transactions,
              transaction,
            ],
            accounts,
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
          (acc, item) => acc + item.balance,
          0
        ),

    }),
    {
      name: "finpilot-storage",
    }
  )
);