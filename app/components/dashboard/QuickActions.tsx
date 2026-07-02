"use client";

import { useState } from "react";

import {
  Plus,
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
} from "lucide-react";

import AddIncomeModal from "../modals/AddIncomeModal";

const actions = [
  {
    id: "income",
    title: "Nova Receita",
    icon: Plus,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "expense",
    title: "Nova Despesa",
    icon: ArrowDownCircle,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "transfer",
    title: "Transferência",
    icon: ArrowUpCircle,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "reports",
    title: "Relatórios",
    icon: BarChart3,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function QuickActions() {
  const [openIncome, setOpenIncome] = useState(false);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 mt-8">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              onClick={() => {
                if (action.id === "income") {
                  setOpenIncome(true);
                }
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 p-5"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center`}
                >
                  <Icon size={28} />
                </div>

                <div className="text-left">

                  <p className="font-semibold">
                    {action.title}
                  </p>

                  <span className="text-xs text-zinc-400">
                    Clique para abrir
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
    </>
  );
}