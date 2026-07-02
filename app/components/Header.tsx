import { Bell } from "lucide-react";

export default function Header() {
  const hora = new Date().getHours();

  const saudacao =
    hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  return (
    <header className="flex items-center justify-between mb-10">

      <div>

        <h1 className="text-5xl font-black">
          {saudacao}, Thiago 👋
        </h1>

        <p className="text-zinc-400 mt-2">
          Seu dinheiro está sob controle.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10">

          <Bell size={20} />

        </button>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold">

          T

        </div>

      </div>

    </header>
  );
}