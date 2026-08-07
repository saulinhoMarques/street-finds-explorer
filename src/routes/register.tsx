import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Zap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex flex-1 bg-primary p-12 flex-col justify-between text-primary-foreground">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Zap className="text-primary w-5 h-5" />
            </div>
            <span className="text-xl font-bold">NexaFlow</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">Crie sua conta</h1>
          <p className="text-primary-foreground/80 text-lg">
            Comece hoje a transformar a gestão do seu negócio com a NexaFlow.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/60">© 2026 NexaFlow.</p>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-sm space-y-8">
          <div className="md:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="text-xl font-bold">NexaFlow</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Criar conta</h2>
            <p className="text-muted-foreground">Preencha os dados para começar.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate({ to: "/onboarding" }); }}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome completo</label>
              <Input type="text" placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <Input type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Senha</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirmar senha</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            
            <div className="flex items-start space-x-2 py-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                Concordo com os <a href="#" className="text-primary hover:underline">termos de uso</a> e <a href="#" className="text-primary hover:underline">política de privacidade</a>.
              </label>
            </div>

            <Button className="w-full h-12 gap-2">
              Criar conta <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Já tem uma conta? <Link to="/login" className="text-primary font-bold hover:underline">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
