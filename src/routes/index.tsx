import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  BarChart3, 
  Globe, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  MessageSquare
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">NexaFlow</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-sm font-medium hover:text-primary transition-colors">Recursos</a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como funciona</a>
            <a href="#planos" className="text-sm font-medium hover:text-primary transition-colors">Planos</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Começar agora</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3 h-3" />
                  Nova era da gestão
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                  Seu negócio organizado. <br />
                  <span className="text-primary">Seus clientes mais próximos.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Uma plataforma completa para pequenos negócios gerenciarem clientes, serviços, profissionais e agendamentos em um só lugar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button size="lg" className="h-14 px-8 text-lg gap-2">
                      Começar agora <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                    Ver demonstração
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl rounded-full" />
                <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden aspect-video lg:aspect-square flex items-center justify-center">
                  <div className="p-8 w-full h-full flex flex-col gap-4">
                    <div className="h-8 w-1/3 bg-muted rounded animate-pulse" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-muted rounded animate-pulse" />
                      <div className="h-32 bg-muted rounded animate-pulse" />
                      <div className="h-32 bg-muted rounded animate-pulse" />
                    </div>
                    <div className="h-48 bg-muted rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="recursos" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Tudo o que seu negócio precisa</h2>
              <p className="text-muted-foreground text-lg">
                Recursos pensados para simplificar sua rotina e melhorar a experiência do seu cliente.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard 
                icon={<Users className="w-6 h-6" />}
                title="Gestão simples"
                description="Organize clientes, serviços e profissionais em um único lugar de forma intuitiva."
              />
              <BenefitCard 
                icon={<Calendar className="w-6 h-6" />}
                title="Agendamentos"
                description="Tenha controle completo da sua agenda com visualizações por dia, semana ou lista."
              />
              <BenefitCard 
                icon={<Globe className="w-6 h-6" />}
                title="Presença digital"
                description="Tenha uma página profissional personalizada para apresentar seu negócio e receber agendamentos."
              />
              <BenefitCard 
                icon={<BarChart3 className="w-6 h-6" />}
                title="Dados do negócio"
                description="Acompanhe indicadores importantes de faturamento e crescimento através do dashboard."
              />
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="como-funciona" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
              <p className="text-muted-foreground text-lg">
                Três passos simples para transformar a gestão da sua empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <StepItem 
                number="01"
                title="Cadastre seu negócio"
                description="Configure sua empresa, defina seus serviços e adicione seus profissionais em minutos."
              />
              <StepItem 
                number="02"
                title="Organize sua operação"
                description="Gerencie seus clientes e acompanhe todos os agendamentos pelo painel administrativo."
              />
              <StepItem 
                number="03"
                title="Cresça"
                description="Use seus dados e sua presença digital para atrair mais clientes e melhorar seu faturamento."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planos" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Planos que cabem no seu bolso</h2>
              <p className="text-muted-foreground text-lg">
                Escolha o plano ideal para o momento do seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard 
                title="ESSENCIAL"
                price="59"
                features={[
                  "Página profissional",
                  "Hospedagem inclusa",
                  "Certificado SSL",
                  "Suporte prioritário",
                  "Atualizações constantes"
                ]}
              />
              <PricingCard 
                title="PROFISSIONAL"
                price="99"
                popular={true}
                features={[
                  "Tudo do Essencial",
                  "Agenda online",
                  "Gestão de clientes",
                  "Gestão de serviços",
                  "Dashboard completo",
                  "Gestão de profissionais"
                ]}
              />
              <PricingCard 
                title="PREMIUM"
                price="199"
                features={[
                  "Tudo do Profissional",
                  "Múltiplos profissionais",
                  "Relatórios avançados",
                  "Recursos personalizados",
                  "Personalização total",
                  "API de integração"
                ]}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Dúvidas frequentes</h2>
              <p className="text-muted-foreground text-lg">
                Tudo o que você precisa saber sobre o NexaFlow.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <FAQItem 
                question="Preciso instalar algum programa?"
                answer="Não. O NexaFlow é uma plataforma 100% online que funciona diretamente pelo seu navegador favorito, em qualquer dispositivo."
              />
              <FAQItem 
                question="Posso acessar pelo celular?"
                answer="Sim. A plataforma é totalmente responsiva e oferece uma excelente experiência tanto em smartphones quanto em tablets."
              />
              <FAQItem 
                question="Posso cadastrar vários funcionários?"
                answer="Sim, dependendo do plano contratado você pode adicionar múltiplos profissionais para gerenciar suas agendas individuais."
              />
              <FAQItem 
                question="Meus dados ficam separados de outras empresas?"
                answer="Sim. Nossa arquitetura garante o total isolamento dos dados. Sua empresa tem um ambiente exclusivo e seguro."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-foreground-foreground py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="text-primary-foreground w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">NexaFlow</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Gestão simples para negócios que querem crescer. Organize sua operação e encante seus clientes.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Plataforma</h4>
              <ul className="space-y-4">
                <li><a href="#recursos" className="text-muted-foreground hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#planos" className="text-muted-foreground hover:text-white transition-colors">Planos</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Suporte</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Termos de uso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 NexaFlow. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Smartphone className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-card p-8 rounded-2xl border hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function StepItem({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative">
      <div className="text-5xl font-black text-primary/10 mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, popular = false }: { title: string, price: string, features: string[], popular?: boolean }) {
  return (
    <div className={`p-8 rounded-3xl border bg-card relative flex flex-col ${popular ? 'ring-2 ring-primary shadow-2xl scale-105 z-10' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Mais popular
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-muted-foreground tracking-widest uppercase mb-4">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold">R$</span>
          <span className="text-5xl font-black tracking-tight">{price}</span>
          <span className="text-muted-foreground">/mês</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/register">
        <Button className="w-full h-12 text-md" variant={popular ? 'default' : 'outline'}>
          Começar agora
        </Button>
      </Link>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="p-6 rounded-2xl border bg-card">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}
