type Props = {
    title: string;
    value: string;
    color: string;
  };
  
  export default function StatsCard({ title, value, color }: Props) {
    return (
      <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:scale-[1.03] transition-all duration-300">
  
        <div
          className="w-12 h-12 rounded-2xl mb-5"
          style={{ background: color }}
        />
  
        <p className="text-zinc-400">
          {title}
        </p>
  
        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
  
      </div>
    );
  }