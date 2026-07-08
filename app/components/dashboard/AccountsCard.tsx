"use client";

import { useState } from "react";
import { Landmark, Plus } from "lucide-react";

import { useFinanceStore } from "@/store/financeStore";
import AddAccountModal from "../modals/AddAccountModal";

const dinheiro = (valor: number) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function AccountsCard() {
  const accounts = useFinanceStore(
    (state) => state.accounts
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Contas Bancárias
            </h2>

            <p className="text-zinc-400">
              Saldo por instituição
            </p>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold transition hover:bg-cyan-500"
          >
            <Plus size={18} />
            Nova Conta
          </button>

        </div>

        <div className="space-y-4">

          {accounts.map((account) => (

            <div
              key={account.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >

              <div className="flex items-center gap-4">

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${account.color}25`,
                  }}
                >
                  <Landmark
                    size={26}
                    color={account.color}
                  />
                </div>

                <div>

                  <h3 className="text-lg font-bold">
                    {account.bank}
                  </h3>

                  <p className="text-zinc-400">
                    {account.name}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-sm text-zinc-400">
                  Saldo
                </p>

                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: account.color,
                  }}
                >
                  {dinheiro(account.balance)}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </div>

      <AddAccountModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}