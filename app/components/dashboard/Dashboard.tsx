"use client";

import { useEffect, useState } from "react";

import Header from "../Header";
import BalanceCard from "../BalanceCard";
import InfoCard from "../cards/InfoCard";
import UpcomingBills from "./UpcomingBills";
import ChartPlaceholder from "./ChartPlaceholder";
import GoalsCard from "./GoalsCard";
import QuickActions from "./QuickActions";
import TransactionsList from "./TransactionsList";
import AccountsCard from "./AccountsCard";

import { useFinanceStore } from "@/store/financeStore";

import {
  Wallet,
  TrendingDown,
  PiggyBank,
  HandCoins,
} from "lucide-react";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const income = useFinanceStore((state) => state.totalIncome());
  const expense = useFinanceStore((state) => state.totalExpense());

  if (!mounted) {
    return (
      <section className="flex-1 overflow-auto p-10">
        <Header />
      </section>
    );
  }

  const reserve = income * 0.2;
  const tithe = income * 0.1;

  const money = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <section className="flex-1 overflow-auto p-10">

      <Header />

      <BalanceCard />

      <QuickActions />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <InfoCard
          title="Receitas"
          value={money(income)}
          icon={<Wallet size={28} />}
        />

        <InfoCard
          title="Despesas"
          value={money(expense)}
          icon={<TrendingDown size={28} />}
        />

        <InfoCard
          title="Reserva"
          value={money(reserve)}
          icon={<PiggyBank size={28} />}
        />

        <InfoCard
          title="Dízimo"
          value={money(tithe)}
          icon={<HandCoins size={28} />}
        />

      </div>

      <div className="mt-8 grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-8">

          <ChartPlaceholder />

          <GoalsCard />

          <TransactionsList />

        </div>

        <div className="col-span-12 xl:col-span-4 space-y-6">

          <AccountsCard />

          <UpcomingBills />

        </div>

      </div>

    </section>
  );
}