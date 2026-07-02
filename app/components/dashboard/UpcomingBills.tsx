const bills = [
    {
      title: "Escola do Filho",
      value: "R$ 300",
      day: "08",
      color: "bg-blue-500",
    },
    {
      title: "Financiamento Moto",
      value: "R$ 339",
      day: "22",
      color: "bg-orange-500",
    },
    {
      title: "TV Samsung",
      value: "R$ 230",
      day: "25",
      color: "bg-violet-500",
    },
  ];
  
  export default function UpcomingBills() {
    return (
      <div className="rounded-3xl bg-white/5 border border-white/10 p-8 h-full">
  
        <h2 className="text-2xl font-bold mb-6">
          Próximos vencimentos
        </h2>
  
        <div className="space-y-4">
  
          {bills.map((bill) => (
            <div
              key={bill.title}
              className="flex items-center justify-between rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 p-4"
            >
  
              <div className="flex items-center gap-4">
  
                <div
                  className={`w-14 h-14 rounded-2xl ${bill.color} flex items-center justify-center text-xl font-bold`}
                >
                  {bill.day}
                </div>
  
                <div>
  
                  <h3 className="font-semibold">
                    {bill.title}
                  </h3>
  
                  <p className="text-sm text-zinc-400">
                    Vence este mês
                  </p>
  
                </div>
  
              </div>
  
              <span className="font-bold text-lg">
                {bill.value}
              </span>
  
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }