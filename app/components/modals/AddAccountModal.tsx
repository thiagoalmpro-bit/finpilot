"use client";

import { useState } from "react";
import { useFinanceStore } from "@/store/financeStore";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddAccountModal({
  open,
  onClose,
}: Props) {
  const addAccount = useFinanceStore(
    (state) => state.addAccount
  );

  const [bank, setBank] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  if (!open) return null;

  function salvar() {
    if (!bank || !name) return;

    addAccount({
      id: Date.now().toString(),
      bank,
      name,
      balance: Number(balance) || 0,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });

    setBank("");
    setName("");
    setBalance("");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[520px] rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-3xl font-bold">
          Nova Conta Bancária
        </h2>

        <div className="space-y-5">

          <input
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            placeholder="Banco (Inter, Nubank...)"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da conta"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Saldo Inicial"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl bg-zinc-700 px-6 py-3"
          >
            Cancelar
          </button>

          <button
            onClick={salvar}
            className="rounded-xl bg-cyan-600 px-6 py-3 hover:bg-cyan-500"
          >
            Criar Conta
          </button>

        </div>

      </div>

    </div>
  );
}