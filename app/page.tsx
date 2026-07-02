import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[#050816] text-white">

      <Sidebar />

      <Dashboard />

    </main>
  );
}