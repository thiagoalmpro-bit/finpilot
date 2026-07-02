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
  const adicionarReceita = useFinanceStore(
    (state) => state.adicionarReceita
  );

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");

  if (!open) return null;

  function salvar() {
    if (!descricao || !valor || !data) return;

    adicionarReceita({
      id: Date.now(),
      descricao,
      valor: Number(valor),
      data,
    });

    setDescricao("");
    setValor("");
    setData("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="w-[500px] rounded-3xl bg-[#111827] border border-white/10 p-8">

        <h2 className="text-3xl font-bold mb-8">
          Nova Receita
        </h2>

        <div className="space-y-5">

          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
          />

          <input
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            type="number"
            placeholder="Valor"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
          />

          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="15/06"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
          />

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-zinc-700"
          >
            Cancelar
          </button>

          <button
            onClick={salvar}
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500"
          >
            Salvar
          </button>

        </div>

      </div>

    </div>
  );
}