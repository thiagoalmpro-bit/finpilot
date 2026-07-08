"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useFinanceStore } from "@/store/financeStore";

export default function FinanceChart() {
  const transactions = useFinanceStore(
    (state) => state.transactions
  );

  const grouped = transactions.reduce((acc, item) => {
    const key = item.date;

    if (!acc[key]) {
      acc[key] = {
        date: key,
        income: 0,
        expense: 0,
      };
    }

    if (item.type === "income") {
      acc[key].income += item.value;
    } else {
      acc[key].expense += item.value;
    }

    return acc;
  }, {} as Record<string, any>);

  const data = Object.values(grouped).sort(
    (a: any, b: any) =>
      new Date(a.date).getTime() -
      new Date(b.date).getTime()
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Fluxo Financeiro
        </h2>

        <p className="text-zinc-400">
          Receitas x Despesas
        </p>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="income"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22c55e"
                  stopOpacity={0.6}
                />

                <stop
                  offset="95%"
                  stopColor="#22c55e"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient
                id="expense"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#ef4444"
                  stopOpacity={0.6}
                />

                <stop
                  offset="95%"
                  stopColor="#ef4444"
                  stopOpacity={0}
                />
              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#333"
              strokeDasharray="3 3"
            />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              fill="url(#income)"
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              fill="url(#expense)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}