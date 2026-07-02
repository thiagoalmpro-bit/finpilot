export default function Sidebar() {
    const menu = [
      { icon: "🏠", title: "Dashboard" },
      { icon: "💰", title: "Receitas" },
      { icon: "💳", title: "Despesas" },
      { icon: "📈", title: "Relatórios" },
      { icon: "🎯", title: "Metas" },
      { icon: "⚙️", title: "Configurações" },
    ];
  
    return (
      <aside className="w-72 h-screen bg-[#0B1120] border-r border-white/10 p-6 flex flex-col">
  
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            FinPilot
          </h1>
  
          <p className="text-zinc-500 mt-1">
            Seu piloto financeiro
          </p>
        </div>
  
        <div className="mt-12 space-y-3">
  
          {menu.map((item) => (
  
            <button
              key={item.title}
              className="group flex items-center gap-4 w-full rounded-2xl p-4 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-500 hover:scale-105"
            >
  
              <span className="text-xl">
                {item.icon}
              </span>
  
              <span className="font-medium">
                {item.title}
              </span>
  
            </button>
  
          ))}
  
        </div>
  
        <div className="mt-auto rounded-3xl bg-white/5 p-5 border border-white/10">
  
          <p className="text-xs text-zinc-500">
            Usuário
          </p>
  
          <h3 className="font-bold mt-1">
            Thiago Almeida
          </h3>
  
          <p className="text-sm text-violet-400">
            FinPilot Alpha
          </p>
  
        </div>
  
      </aside>
    );
  }