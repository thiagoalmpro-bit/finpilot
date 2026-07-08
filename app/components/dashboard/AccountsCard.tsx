"use client";

import { Wallet, Landmark, CreditCard } from "lucide-react";
import { useFinanceStore } from "@/store/financeStore";

export default function AccountsCard() {
  const accounts = useFinanceStore(
    (state) => state.accounts
  );

  const money = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  function getIcon(icon: string) {
    switch (icon) {
      case "wallet":
        return <Wallet size={24} />;

      case "inter":
        return <Landmark size={24} />;

      case "nubank":
        return <CreditCard size={24} />;

      case "caixa":
        return <Landmark size={24} />;

      default:
        return <Wallet size={24} />;
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-2xl font-bold">
          Minhas Contas
        </h2>

        <span className="text-zinc-400">
          {accounts.length} contas
        </span>

      </div>

      <div className="space-y-4">

        {accounts.map((account) => (

          <div
            key={account.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">

                {getIcon(account.icon)}

              </div>

              <div>

                <h3 className="font-semibold">
                  {account.name}
                </h3>

                <p className="text-sm text-zinc-400">
                  Conta financeira
                </p>

              </div>

            </div>

            <span className="text-xl font-bold text-green-400">
              {money(account.balance)}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}