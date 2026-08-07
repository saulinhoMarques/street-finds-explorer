import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Building2, User, Bell, Palette, Clock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/configuracoes")({
  component: ConfiguracoesPage,
});

function ConfiguracoesPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Ajuste os detalhes do seu negócio e conta.</p>
      </div>

      <Tabs defaultValue="empresa" className="space-y-6">
        <TabsList className="bg-muted p-1 rounded-2xl h-auto">
          <TabsTrigger value="empresa" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Building2 className="w-4 h-4 mr-2" /> Empresa
          </TabsTrigger>
          <TabsTrigger value="conta" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <User className="w-4 h-4 mr-2" /> Conta
          </TabsTrigger>
          <TabsTrigger value="horarios" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Clock className="w-4 h-4 mr-2" /> Horários
          </TabsTrigger>
          <TabsTrigger value="aparencia" className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Palette className="w-4 h-4 mr-2" /> Aparência
          </TabsTrigger>
        </TabsList>

        <TabsContent value="empresa">
          <Card className="rounded-3xl border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Dados da Empresa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-w-2xl">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome da Empresa</Label>
                <Input id="nome" defaultValue="Barbearia Imperial" className="rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input id="whatsapp" defaultValue="(11) 99999-9999" className="rounded-xl" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="segmento">Segmento</Label>
                  <Input id="segmento" defaultValue="Beleza e Estética" className="rounded-xl" />
                </div>
              </div>
              <div className="grid gap-2 pt-4">
                <Button className="w-fit rounded-xl px-8">Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conta">
          <Card className="rounded-3xl border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Sua Conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-w-2xl">
              <div className="grid gap-2">
                <Label htmlFor="user-nome">Nome</Label>
                <Input id="user-nome" defaultValue="João Administrador" className="rounded-xl" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" defaultValue="joao@nexaflow.com" className="rounded-xl" />
              </div>
              <div className="grid gap-2 pt-4">
                <Button className="w-fit rounded-xl px-8">Atualizar Perfil</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
