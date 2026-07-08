"use client";

import { useState } from "react";

import {
  Plus,
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
} from "lucide-react";

import AddIncomeModal from "../modals/AddIncomeModal";
import AddExpenseModal from "../modals/AddExpenseModal";

const actions = [
  {
    id: "income",
    title: "Nova Receita",
    subtitle: "Cadastrar entrada",
    icon: Plus,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "expense",
    title: "Nova Despesa",
    subtitle: "Cadastrar saída",
    icon: ArrowDownCircle,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "transfer",
    title: "Transferência",
    subtitle: "Entre contas",
    icon: ArrowUpCircle,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "reports",
    title: "Relatórios",
    subtitle: "Visualizar dados",
    icon: BarChart3,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function QuickActions() {
  const [openIncome, setOpenIncome] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);

  function handleAction(id: string) {
    switch (id) {
      case "income":
        setOpenIncome(true);
        break;

      case "expense":
        setOpenExpense(true);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.id}
              onClick={() => handleAction(action.id)}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-white/10"
            >

              <div className="flex items-center gap-5">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <div className="flex flex-col items-start">

                  <span className="text-lg font-bold">
                    {action.title}
                  </span>

                  <span className="text-sm text-zinc-400">
                    {action.subtitle}
                  </span>

                </div>

              </div>

            </button>
          );
        })}

      </div>

      <AddIncomeModal
        open={openIncome}
        onClose={() => setOpenIncome(false)}
      />

      <AddExpenseModal
        open={openExpense}
        onClose={() => setOpenExpense(false)}
      />
    </>
  );
}