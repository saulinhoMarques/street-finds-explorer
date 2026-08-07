import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const chartData = [
  { name: "Jan", total: 4500 },
  { name: "Fev", total: 5200 },
  { name: "Mar", total: 4800 },
  { name: "Abr", total: 6100 },
  { name: "Mai", total: 5900 },
  { name: "Jun", total: 7200 },
];

export const Route = createFileRoute("/_authenticated/relatorios")({
  component: RelatoriosPage,
});

function RelatoriosPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Relatórios</h1>
        <p className="text-muted-foreground">Acompanhe o desempenho do seu negócio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Faturamento" value="R$ 24.500" trend="+12.5%" icon={DollarSign} positive />
        <StatCard title="Agendamentos" value="156" trend="+5.2%" icon={Calendar} positive />
        <StatCard title="Novos Clientes" value="24" trend="-2.1%" icon={Users} positive={false} />
        <StatCard title="Ticket Médio" value="R$ 157" trend="+8.4%" icon={TrendingUp} positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-3xl border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-bold">Faturamento Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} />
                  <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                  <Bar dataKey="total" fill="oklch(0.25 0.08 255)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-bold">Crescimento de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} />
                  <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                  <Line type="monotone" dataKey="total" stroke="oklch(0.25 0.08 255)" strokeWidth={3} dot={{ r: 4, fill: "oklch(0.25 0.08 255)", strokeWidth: 2 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, icon: Icon, positive }: any) {
  return (
    <Card className="rounded-3xl border-none shadow-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary/10 p-2 rounded-xl">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className={`flex items-center gap-1 text-xs font-black uppercase tracking-wider ${positive ? "text-green-600" : "text-red-600"}`}>
            {trend} {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          </div>
        </div>
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{title}</h3>
        <p className="text-2xl font-black">{value}</p>
      </CardContent>
    </Card>
  );
}
