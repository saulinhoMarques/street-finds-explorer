import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar as CalendarIcon, List, LayoutGrid } from "lucide-react";
import { mockData } from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated/agenda")({
  component: AgendaPage,
});

function AgendaPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Agenda</h1>
          <p className="text-muted-foreground">Gerencie seus compromissos e horários.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Novo agendamento
        </Button>
      </div>

      <Card className="rounded-3xl border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2 bg-muted p-1 rounded-xl">
            <Button variant="ghost" size="sm" className="rounded-lg h-8 px-3 text-xs font-bold bg-background shadow-sm">Dia</Button>
            <Button variant="ghost" size="sm" className="rounded-lg h-8 px-3 text-xs font-bold text-muted-foreground">Semana</Button>
            <Button variant="ghost" size="sm" className="rounded-lg h-8 px-3 text-xs font-bold text-muted-foreground">Lista</Button>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="font-bold">07 de Agosto, 2026</h3>
            <div className="flex gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">{"<"}</Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">{">"}</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((hour) => (
              <div key={hour} className="flex min-h-[100px] group">
                <div className="w-20 py-4 px-4 text-xs font-bold text-muted-foreground border-r bg-muted/5 flex justify-center">
                  {hour}
                </div>
                <div className="flex-grow p-2 relative">
                  {mockData.appointments.filter(a => a.time.startsWith(hour.split(":")[0])).map(apt => (
                    <div key={apt.id} className="bg-primary/10 border-l-4 border-primary p-3 rounded-xl absolute inset-2 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold text-primary">{apt.time}</span>
                        <span className="text-[10px] font-black uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          {apt.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold truncate">{apt.customer}</h4>
                      <p className="text-xs text-muted-foreground truncate">{apt.service} • {apt.professional}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
