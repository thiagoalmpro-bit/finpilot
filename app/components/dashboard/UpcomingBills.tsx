"use client";

import { useFinanceStore } from "@/store/financeStore";
import {
  CreditCard,
  Home,
  Car,
  HeartPulse,
  GraduationCap,
  Utensils,
  Church,
  CircleDollarSign,
} from "lucide-react";

export default function UpcomingBills() {
  const transactions = useFinanceStore(
    (state) => state.transactions
  );

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
    );

  function icon(category?: string) {
    switch (category) {
      case "Moradia":
        return <Home size={20} />;
      case "Transporte":
        return <Car size={20} />;
      case "Saúde":
        return <HeartPulse size={20} />;
      case "Educação":
        return <GraduationCap size={20} />;
      case "Alimentação":
        return <Utensils size={20} />;
      case "Igreja":
        return <Church size={20} />;
      default:
        return <CreditCard size={20} />;
    }
  }

  const money = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Próximos vencimentos
      </h2>

      {expenses.length === 0 ? (
        <div className="py-10 text-center text-zinc-500">
          Nenhuma despesa cadastrada.
        </div>
      ) : (
        <div className="space-y-4">

          {expenses.slice(0, 6).map((expense) => (

            <div
              key={expense.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-400">

                  {icon(expense.category)}

                </div>

                <div>

                  <h3 className="font-semibold">
                    {expense.description}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {expense.category}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="font-bold">

                  {money(expense.value)}

                </p>

                <span className="text-xs text-zinc-400">

                  {new Date(expense.date).toLocaleDateString("pt-BR")}

                </span>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}