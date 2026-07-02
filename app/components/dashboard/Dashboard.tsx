import Header from "../Header";
import BalanceCard from "../BalanceCard";
import InfoCard from "../cards/InfoCard";
import UpcomingBills from "./UpcomingBills";
import ChartPlaceholder from "./ChartPlaceholder";
import GoalsCard from "./GoalsCard";
import QuickActions from "./QuickActions";

import {
  Wallet,
  TrendingDown,
  PiggyBank,
  HandCoins,
} from "lucide-react";

export default function Dashboard() {
  return (
    <section className="flex-1 p-10 overflow-auto">

      <Header />

      <BalanceCard />

      <QuickActions />

      <div className="grid grid-cols-4 gap-6 mt-8">

        <InfoCard
          title="Receitas"
          value="R$ 2.810"
          icon={<Wallet size={28} />}
        />

        <InfoCard
          title="Despesas"
          value="R$ 1.199"
          icon={<TrendingDown size={28} />}
        />

        <InfoCard
          title="Reserva"
          value="R$ 600"
          icon={<PiggyBank size={28} />}
        />

        <InfoCard
          title="Dízimo"
          value="R$ 281"
          icon={<HandCoins size={28} />}
        />

      </div>

      <div className="grid grid-cols-12 gap-6 mt-8">

        <div className="col-span-8">

          <ChartPlaceholder />

          <GoalsCard />

        </div>

        <div className="col-span-4">

          <UpcomingBills />

        </div>

      </div>

    </section>
  );
}