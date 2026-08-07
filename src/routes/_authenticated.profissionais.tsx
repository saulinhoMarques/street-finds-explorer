import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, User } from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_authenticated/profissionais")({
  component: ProfissionaisPage,
});

function ProfissionaisPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profissionais</h1>
          <p className="text-muted-foreground">Gerencie sua equipe.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Adicionar profissional
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.professionals.map((pro) => (
          <Card key={pro.id} className="rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/5 p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{pro.name}</h3>
                  <p className="text-sm text-muted-foreground">{pro.specialty}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Serviços vinculados</span>
                  <span className="font-bold">8 serviços</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none rounded-lg px-2 py-0.5 text-[10px] font-black uppercase">
                    Ativo
                  </Badge>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full rounded-xl">Ver Perfil</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
