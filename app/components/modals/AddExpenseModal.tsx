"use client";

import { useState } from "react";
import { useFinanceStore } from "@/store/financeStore";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddExpenseModal({
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
  const [category, setCategory] = useState("Alimentação");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const [accountId, setAccountId] = useState(
    accounts[0]?.id ?? ""
  );

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
      type: "expense",
      description,
      category,
      value: Number(value),
      date,
      accountId,
    });

    setDescription("");
    setCategory("Alimentação");
    setValue("");
    setDate("");
    setAccountId(accounts[0]?.id ?? "");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[520px] rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="mb-8 text-3xl font-bold">
          Nova Despesa
        </h2>

        <div className="space-y-5">

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-red-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          >
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Moradia</option>
            <option>Educação</option>
            <option>Saúde</option>
            <option>Igreja</option>
            <option>Lazer</option>
            <option>Outros</option>
          </select>

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
            placeholder="Valor"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-red-500"
          />

          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-red-500"
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
                {account.name}
              </option>
            ))}
          </select>

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl bg-zinc-700 px-6 py-3 hover:bg-zinc-600"
          >
            Cancelar
          </button>

          <button
            onClick={salvar}
            className="rounded-xl bg-red-600 px-6 py-3 hover:bg-red-500"
          >
            Salvar
          </button>

        </div>

      </div>

    </div>
  );
}