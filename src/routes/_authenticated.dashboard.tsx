import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockData } from "@/lib/mock-data";
import { 
  CalendarDays, 
  Users, 
  Scissors, 
  TrendingUp,
  ArrowUpRight,
  Clock
} from "lucide-react";
import { 
  Bar, 
  BarChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip,
  Cell
} from "recharts";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const chartData = [
    { name: "Seg", total: 12 },
    { name: "Ter", total: 18 },
    { name: "Qua", total: 15 },
    { name: "Qui", total: 22 },
    { name: "Sex", total: 28 },
    { name: "Sab", total: 32 },
    { name: "Dom", total: 5 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Agendamentos hoje" 
          value={mockData.stats.appointmentsToday} 
          trend={`+${mockData.stats.growth.appointments}%`}
          icon={<CalendarDays className="w-5 h-5" />}
        />
        <StatCard 
          title="Clientes" 
          value={mockData.stats.totalCustomers} 
          trend={`+${mockData.stats.growth.customers}%`}
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard 
          title="Serviços" 
          value={mockData.stats.totalServices} 
          icon={<Scissors className="w-5 h-5" />}
        />
        <StatCard 
          title="Faturamento estimado" 
          value={`R$ ${mockData.stats.estimatedRevenue.toLocaleString()}`} 
          trend={`+${mockData.stats.growth.revenue}%`}
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <CardTitle className="text-lg font-bold">Agendamentos por período</CardTitle>
            <div className="flex gap-2">
              <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">7 dias</button>
              <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80">30 dias</button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    cursor={{fill: 'oklch(var(--muted))', opacity: 0.3}}
                    contentStyle={{borderRadius: '12px', border: '1px solid oklch(var(--border))'}}
                  />
                  <Bar 
                    dataKey="total" 
                    fill="oklch(var(--primary))" 
                    radius={[6, 6, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Próximos agendamentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockData.appointments.map((apt) => (
              <div key={apt.id} className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-2xl bg-muted flex flex-col items-center justify-center border transition-colors group-hover:border-primary/30">
                  <span className="text-xs font-bold">{apt.time}</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-bold truncate">{apt.customer}</h4>
                  <p className="text-xs text-muted-foreground truncate">{apt.service} • {apt.professional}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  apt.status === 'Confirmado' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, icon }: { title: string, value: string | number, trend?: string, icon: React.ReactNode }) {
  return (
    <Card className="rounded-3xl border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            {icon}
          </div>
          {trend && (
            <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
              {trend} <ArrowUpRight className="w-3 h-3" />
            </div>
          )}
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <p className="text-3xl font-black tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}
