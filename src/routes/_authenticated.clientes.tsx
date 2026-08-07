import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_authenticated/clientes")({
  component: ClientesPage,
});

function ClientesPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">Gerencie sua base de clientes.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Novo cliente
        </Button>
      </div>

      <Card className="rounded-3xl border-none shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar clientes..." className="pl-10 rounded-xl" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2 rounded-xl">
                <Filter className="w-4 h-4" /> Filtros
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto rounded-xl border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-xs uppercase font-bold text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Cliente</th>
                  <th className="px-6 py-4">Telefone</th>
                  <th className="px-6 py-4">Último atendimento</th>
                  <th className="px-6 py-4">Agendamentos</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockData.customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-bold">{customer.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{customer.phone}</td>
                    <td className="px-6 py-4 text-muted-foreground">15/05/2026</td>
                    <td className="px-6 py-4 text-center font-bold">12</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none rounded-lg px-2 py-0.5 text-[10px] font-black uppercase">
                        Ativo
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
