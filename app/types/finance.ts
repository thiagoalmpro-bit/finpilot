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