import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, MoreHorizontal } from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_authenticated/servicos")({
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Serviços</h1>
          <p className="text-muted-foreground">Configure os serviços prestados.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Novo serviço
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.services.map((service) => (
          <Card key={service.id} className="rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow group">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">{service.name}</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg group-hover:bg-muted">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
              <div className="flex justify-between items-center bg-muted/50 p-4 rounded-xl">
                <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-wider">Preço</p>
                  <p className="font-bold">R$ {service.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-wider">Duração</p>
                  <p className="font-bold">{service.duration} min</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="rounded-3xl border-dashed border-2 border-muted flex items-center justify-center p-6 hover:bg-muted/10 cursor-pointer transition-colors">
          <div className="text-center">
            <Plus className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
            <p className="font-bold text-muted-foreground">Adicionar serviço</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
