"use client";

import { useState } from "react";
import { Trash2, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useFinanceStore } from "@/store/financeStore";

export default function TransactionsList() {
  const transactions = useFinanceStore((state) => state.transactions);
  const removeTransaction = useFinanceStore(
    (state) => state.removeTransaction
  );

  const [filter, setFilter] = useState<
    "all" | "income" | "expense"
  >("all");

  const filtered = transactions.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const money = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Últimas movimentações
        </h2>

        <span className="text-zinc-400">
          {filtered.length} registros
        </span>

      </div>

      <div className="flex gap-3 mb-8">

        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-xl ${
            filter === "all"
              ? "bg-cyan-600"
              : "bg-white/5"
          }`}
        >
          Todas
        </button>

        <button
          onClick={() => setFilter("income")}
          className={`px-5 py-2 rounded-xl ${
            filter === "income"
              ? "bg-green-600"
              : "bg-white/5"
          }`}
        >
          Receitas
        </button>

        <button
          onClick={() => setFilter("expense")}
          className={`px-5 py-2 rounded-xl ${
            filter === "expense"
              ? "bg-red-600"
              : "bg-white/5"
          }`}
        >
          Despesas
        </button>

      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-zinc-500">
          Nenhuma movimentação encontrada.
        </div>
      ) : (
        <div className="space-y-4">

          {[...filtered]
            .reverse()
            .map((transaction) => (

              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      transaction.type === "income"
                        ? "bg-green-500/20"
                        : "bg-red-500/20"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowUpRight className="text-green-400" />
                    ) : (
                      <ArrowDownLeft className="text-red-400" />
                    )}
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {transaction.description}
                    </h3>

                    <p className="text-sm text-zinc-400">
                      {transaction.category ?? "Sem categoria"} • {transaction.date}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-6">

                  <span
                    className={`text-lg font-bold ${
                      transaction.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {money(transaction.value)}
                  </span>

                  <button
                    onClick={() =>
                      removeTransaction(transaction.id)
                    }
                    className="rounded-xl p-2 hover:bg-red-500/20"
                  >
                    <Trash2 size={20} />
                  </button>

                </div>

              </div>

            ))}

        </div>
      )}

    </div>
  );
}