"use client";

import { create } from "zustand";

export interface Receita {
  id: number;
  descricao: string;
  valor: number;
  data: string;
}

export interface Despesa {
  id: number;
  descricao: string;
  valor: number;
  vencimento: string;
  categoria: string;
  parcelado: boolean;
  parcelaAtual?: number;
  totalParcelas?: number;
}

interface FinanceStore {
  receitas: Receita[];
  despesas: Despesa[];

  adicionarReceita: (receita: Receita) => void;
  adicionarDespesa: (despesa: Despesa) => void;

  removerReceita: (id: number) => void;
  removerDespesa: (id: number) => void;
}

export const useFinanceStore = create<FinanceStore>((set) => ({
  receitas: [
    {
      id: 1,
      descricao: "Pagamento dia 15",
      valor: 1110,
      data: "15/07",
    },
    {
      id: 2,
      descricao: "Pagamento dia 25",
      valor: 750,
      data: "25/07",
    },
    {
      id: 3,
      descricao: "Pagamento dia 30",
      valor: 950,
      data: "30/07",
    },
  ],

  despesas: [
    {
      id: 1,
      descricao: "Escola",
      valor: 300,
      vencimento: "08",
      categoria: "Educação",
      parcelado: false,
    },
    {
      id: 2,
      descricao: "Moto",
      valor: 339,
      vencimento: "22",
      categoria: "Financiamento",
      parcelado: false,
    },
    {
      id: 3,
      descricao: "TV Samsung",
      valor: 230,
      vencimento: "25",
      categoria: "Eletrônicos",
      parcelado: true,
      parcelaAtual: 4,
      totalParcelas: 10,
    },
  ],

  adicionarReceita: (receita) =>
    set((state) => ({
      receitas: [...state.receitas, receita],
    })),

  adicionarDespesa: (despesa) =>
    set((state) => ({
      despesas: [...state.despesas, despesa],
    })),

  removerReceita: (id) =>
    set((state) => ({
      receitas: state.receitas.filter((r) => r.id !== id),
    })),

  removerDespesa: (id) =>
    set((state) => ({
      despesas: state.despesas.filter((d) => d.id !== id),
    })),
}));