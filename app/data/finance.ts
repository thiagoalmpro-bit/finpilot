import { Receita, Despesa } from "../types/finance";

export const receitas: Receita[] = [
  {
    id: 1,
    descricao: "Pagamento Dia 15",
    valor: 1110,
    data: "15/07"
  },
  {
    id: 2,
    descricao: "Pagamento Dia 25",
    valor: 750,
    data: "25/07"
  },
  {
    id: 3,
    descricao: "Pagamento Dia 30",
    valor: 950,
    data: "30/07"
  }
];

export const despesas: Despesa[] = [
  {
    id: 1,
    descricao: "Escola",
    valor: 300,
    vencimento: "08",
    categoria: "Educação",
    parcelado: false
  },
  {
    id: 2,
    descricao: "Moto",
    valor: 339,
    vencimento: "22",
    categoria: "Financiamento",
    parcelado: false
  },
  {
    id: 3,
    descricao: "TV Samsung",
    valor: 230,
    vencimento: "25",
    categoria: "Parcelado",
    parcelado: true,
    parcelaAtual: 4,
    totalParcelas: 10
  }
];