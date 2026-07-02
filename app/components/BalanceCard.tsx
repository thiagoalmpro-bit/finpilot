"use client";

import { useFinanceStore } from "@/store/financeStore";

export default function BalanceCard() {
  const receitas = useFinanceStore((state) => state.receitas);
  const despesas = useFinanceStore((state) => state.despesas);

  const totalReceitas = receitas.reduce((acc, item) => acc + item.valor, 0);

  const totalDespesas = despesas.reduce((acc, item) => acc + item.valor, 0);

  const saldo = totalReceitas - totalDespesas;

  const dizimo = totalReceitas * 0.1;

  const reserva = totalReceitas * 0.2;

  const lazer = totalReceitas * 0.05;

  const livre = saldo - dizimo - reserva - lazer;

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

          <p className="text-white/60">
            Receitas
          </p>

          <h2 className="text-2xl font-bold mt-1">
            {dinheiro(totalReceitas)}
          </h2>

        </div>

        <div>

          <p className="text-white/60">
            Despesas
          </p>

          <h2 className="text-2xl font-bold mt-1">
            {dinheiro(totalDespesas)}
          </h2>

        </div>

        <div>

          <p className="text-white/60">
            Dízimo
          </p>

          <h2 className="text-2xl font-bold mt-1">
            {dinheiro(dizimo)}
          </h2>

        </div>

        <div>

          <p className="text-white/60">
            Livre
          </p>

          <h2 className="text-2xl font-bold text-green-300 mt-1">
            {dinheiro(livre)}
          </h2>

        </div>

      </div>

    </div>
  );
}