"use client";

import { useEffect, useState } from "react";
import { useFinanceStore } from "@/store/financeStore";

export default function BalanceCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const income = useFinanceStore((state) => state.totalIncome());
  const expense = useFinanceStore((state) => state.totalExpense());

  if (!mounted) {
    return (
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-10 h-[280px]" />
    );
  }

  const saldo = income - expense;

  const dizimo = income * 0.1;
  const reserva = income * 0.2;
  const livre = saldo - dizimo - reserva;

  const dinheiro = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-700 via-violet-700 to-cyan-600 p-10 shadow-[0_0_80px_rgba(99,102,241,.35)]">

      <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

      <p className="uppercase tracking-[6px] text-white/60 text-sm">
        Saldo disponível
      </p>

      <h1 className="text-7xl font-black mt-4">
        {dinheiro(saldo)}
      </h1>

      <div className="grid grid-cols-4 gap-8 mt-10">

        <div>
          <p className="text-white/60">Receitas</p>
          <h2 className="text-2xl font-bold mt-1">
            {dinheiro(income)}
          </h2>
        </div>

        <div>
          <p className="text-white/60">Despesas</p>
          <h2 className="text-2xl font-bold mt-1">
            {dinheiro(expense)}
          </h2>
        </div>

        <div>
          <p className="text-white/60">Dízimo</p>
          <h2 className="text-2xl font-bold mt-1">
            {dinheiro(dizimo)}
          </h2>
        </div>

        <div>
          <p className="text-white/60">Livre</p>
          <h2 className="text-2xl font-bold text-green-300 mt-1">
            {dinheiro(livre)}
          </h2>
        </div>

      </div>

    </div>
  );
}