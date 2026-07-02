export default function GoalsCard() {
    const progress = 38;
  
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">
  
        <div className="flex items-center justify-between">
  
          <div>
  
            <h2 className="text-2xl font-bold">
              Meta da Reserva
            </h2>
  
            <p className="text-zinc-400 mt-1">
              Objetivo: R$ 5.000
            </p>
  
          </div>
  
          <h2 className="text-3xl font-black">
            {progress}%
          </h2>
  
        </div>
  
        <div className="mt-8 w-full h-5 rounded-full bg-white/10 overflow-hidden">
  
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
            style={{ width: `${progress}%` }}
          />
  
        </div>
  
        <div className="flex justify-between mt-4 text-sm text-zinc-400">
  
          <span>R$ 1.900</span>
  
          <span>R$ 5.000</span>
  
        </div>
  
      </div>
    );
  }