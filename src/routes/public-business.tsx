import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Instagram, Facebook, Star, Calendar } from "lucide-react";

export const Route = createFileRoute("/public-business")({
  component: PublicBusinessPage,
});

function PublicBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">BI</span>
            </div>
            <span className="font-black tracking-tight text-xl">Barbearia Imperial</span>
          </div>
          <Button className="rounded-xl font-bold gap-2">
            <Calendar className="w-4 h-4" /> Agendar Agora
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-none rounded-lg font-black uppercase tracking-wider px-3 py-1">
                Aberto agora
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
                Seu estilo <br /> começa aqui.
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                A melhor experiência em barbearia da cidade. Profissionais qualificados e ambiente premium.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl h-14 px-8 text-lg font-bold">Ver Serviços</Button>
                <Button size="lg" variant="outline" className="rounded-xl h-14 px-8 text-lg font-bold">Localização</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[40px] bg-primary/10 overflow-hidden shadow-2xl rotate-3">
                 <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800" alt="Barbearia" className="w-full h-full object-cover -rotate-3 scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl border-none shadow-sm bg-muted/20">
              <CardContent className="p-8 flex gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Horário</h3>
                  <p className="text-sm text-muted-foreground italic">Seg - Sáb: 09h às 19h</p>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-none shadow-sm bg-muted/20">
              <CardContent className="p-8 flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Localização</h3>
                  <p className="text-sm text-muted-foreground italic">Av. Principal, 123 - Centro</p>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-none shadow-sm bg-muted/20">
              <CardContent className="p-8 flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Contato</h3>
                  <p className="text-sm text-muted-foreground italic">(11) 99999-9999</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 bg-white shadow-sm"><Instagram className="w-5 h-5" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 bg-white shadow-sm"><Facebook className="w-5 h-5" /></Button>
          </div>
          <p className="text-sm text-muted-foreground font-medium">© 2026 Barbearia Imperial. Potencializado por <span className="font-black text-primary">NexaFlow</span></p>
        </div>
      </footer>
    </div>
  );
}
