"use client";

import { useState } from "react";
import { useFinanceStore } from "@/store/financeStore";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddIncomeModal({
  open,
  onClose,
}: Props) {
  const addTransaction = useFinanceStore(
    (state) => state.addTransaction
  );

  const accounts = useFinanceStore(
    (state) => state.accounts
  );

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const [accountId, setAccountId] = useState("inter");

  if (!open) return null;

  function salvar() {
    if (
      !description ||
      !value ||
      !date ||
      !accountId
    )
      return;

    addTransaction({
      id: Date.now().toString(),
      accountId,
      type: "income",
      description,
      value: Number(value),
      date,
    });

    setDescription("");
    setValue("");
    setDate("");
    setAccountId("inter");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[520px] rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-3xl font-bold">
          Nova Receita
        </h2>

        <div className="space-y-5">

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
            placeholder="Valor"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <select
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          >
            {accounts.map((account) => (
              <option
                key={account.id}
                value={account.id}
              >
                {account.bank} • {account.name}
              </option>
            ))}
          </select>

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
            className="rounded-xl bg-green-600 px-6 py-3 hover:bg-green-500"
          >
            Salvar Receita
          </button>

        </div>

      </div>

    </div>
  );
}