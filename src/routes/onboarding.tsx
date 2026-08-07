import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

function OnboardingPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(s => s + 1);

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Zap className="text-primary-foreground w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">NexaFlow</span>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8 px-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step >= i ? 'bg-primary border-primary text-primary-foreground' : 'bg-background border-muted text-muted-foreground'}`}>
                {step > i ? <Check className="w-5 h-5" /> : i}
              </div>
              {i < 4 && (
                <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${step > i ? 'bg-primary' : 'bg-muted'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-card border rounded-3xl shadow-xl p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl font-bold mb-2">Sobre seu negócio</h2>
                <p className="text-muted-foreground">Conte-nos um pouco sobre sua empresa.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome da empresa</label>
                  <Input placeholder="Ex: Barbearia Imperial" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Segmento</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beauty">Beleza e Estética</SelectItem>
                      <SelectItem value="health">Saúde e Bem-estar</SelectItem>
                      <SelectItem value="education">Educação</SelectItem>
                      <SelectItem value="other">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telefone</label>
                    <Input placeholder="(11) 9999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">WhatsApp</label>
                    <Input placeholder="(11) 9999-9999" />
                  </div>
                </div>
              </div>
              <Button className="w-full h-12 gap-2" onClick={nextStep}>
                Continuar <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl font-bold mb-2">Localização</h2>
                <p className="text-muted-foreground">Onde seu negócio está localizado?</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 space-y-2">
                    <label className="text-sm font-medium">CEP</label>
                    <Input placeholder="00000-000" />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-sm font-medium">Endereço</label>
                    <Input placeholder="Rua, Avenida..." />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Número</label>
                    <Input placeholder="123" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cidade</label>
                    <Input placeholder="Sua cidade" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estado</label>
                    <Input placeholder="UF" />
                  </div>
                </div>
              </div>
              <Button className="w-full h-12 gap-2" onClick={nextStep}>
                Continuar <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl font-bold mb-2">Horários</h2>
                <p className="text-muted-foreground">Quando seu negócio está aberto?</p>
              </div>
              <div className="space-y-2">
                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map(day => (
                  <div key={day} className="flex items-center justify-between p-3 border rounded-xl bg-muted/20">
                    <span className="font-medium">{day}</span>
                    <span className="text-sm text-muted-foreground">{day === 'Domingo' ? 'Fechado' : '09:00 - 18:00'}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full h-12 gap-2" onClick={nextStep}>
                Finalizar configuração <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-8 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-3">Pronto!</h2>
                <p className="text-muted-foreground text-lg">
                  Seu espaço está pronto para começar. Vamos ao painel administrativo?
                </p>
              </div>
              <Button className="w-full h-14 text-lg gap-2" onClick={() => navigate({ to: "/dashboard" })}>
                Ir para o dashboard <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
