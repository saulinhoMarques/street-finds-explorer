/*
Execute esta instrucao no projeto: # PROMPT MESTRE — V1 DO SAAS PARA PEQUENOS NEGÓCIOS

Crie uma aplicação web SaaS profissional, moderna, responsiva e escalável chamada **NexaFlow**.

## 1. OBJETIVO DO PRODUTO

O NexaFlow será uma plataforma SaaS destinada a pequenos negócios de serviços.

A plataforma deve permitir que cada empresa tenha seu próprio ambiente dentro do sistema para administrar:

* Clientes
* Serviços
* Profissionais
* Agendamentos
* Horários
* Dashboard
* Relatórios
* Configurações
* Presença digital

O produto deve ser desenvolvido pensando desde o início em uma arquitetura **multi-tenant**, onde várias empresas utilizam a mesma aplicação, mas cada empresa só consegue visualizar e administrar seus próprios dados.

IMPORTANTE:

Nesta primeira versão, priorize a **interface, experiência do usuário, navegação e estrutura visual**.

Não implemente pagamentos, automações complexas ou integrações externas ainda.

Utilize dados fictícios/mockados para demonstrar o funcionamento da interface.

---

# 2. IDENTIDADE VISUAL

Nome:

**NexaFlow**

Conceito:

Uma plataforma moderna, confiável e tecnológica para ajudar pequenos negócios a organizar sua operação e receber agendamentos.

Estilo visual:

* SaaS moderno
* Profissional
* Minimalista
* Premium
* Tecnológico
* Limpo
* Fácil de usar
* Visual semelhante a produtos SaaS modernos

Evite aparência genérica de template.

A interface deve parecer um produto comercial real.

### Paleta

Utilize uma identidade visual baseada em:

* Azul profundo como cor principal
* Azul/roxo para detalhes e gradientes sutis
* Branco para áreas principais
* Cinza muito claro para backgrounds
* Cinza escuro para textos
* Verde para estados positivos
* Vermelho para erros
* Amarelo/laranja para alertas

Não exagerar nos gradientes.

A interface deve continuar profissional mesmo sem eles.

---

# 3. TECNOLOGIA

Utilize:

* React
* TypeScript
* Vite
* Tailwind CSS
* Componentes reutilizáveis
* Lucide Icons

Organize o projeto de forma limpa e escalável.

Não criar um único arquivo gigante.

Separar componentes, páginas, layouts e dados mockados.

Preparar a estrutura para futura integração com:

* Supabase
* PostgreSQL
* Supabase Auth
* Storage
* Sistema de assinaturas

Nesta etapa NÃO conectar ao Supabase.

---

# 4. ESTRUTURA PRINCIPAL

Criar as seguintes áreas:

## Área pública

* Landing Page
* Página de preços
* Página de demonstração

## Área autenticada

* Dashboard
* Agenda
* Clientes
* Serviços
* Profissionais
* Relatórios
* Configurações

## Autenticação

* Login
* Cadastro
* Recuperação de senha
* Onboarding

---

# 5. LANDING PAGE

Criar uma Landing Page extremamente profissional.

## Header

Logo:

**NexaFlow**

Menu:

* Recursos
* Como funciona
* Planos
* FAQ

Botões:

**Entrar**

**Começar agora**

O header deve permanecer agradável no celular.

---

# 6. HERO

Título principal:

**Seu negócio organizado. Seus clientes mais próximos.**

Subtítulo:

"Uma plataforma completa para pequenos negócios gerenciarem clientes, serviços, profissionais e agendamentos em um só lugar."

Botões:

**Começar agora**

**Ver demonstração**

Adicionar uma representação visual do dashboard ao lado ou abaixo do texto.

A seção deve causar uma primeira impressão forte.

---

# 7. SEÇÃO DE BENEFÍCIOS

Criar cards para:

### Gestão simples

Organize clientes, serviços e profissionais em um único lugar.

### Agendamentos

Tenha controle completo da sua agenda.

### Presença digital

Tenha uma página profissional para apresentar seu negócio.

### Dados do negócio

Acompanhe indicadores importantes através do dashboard.

---

# 8. SEÇÃO "COMO FUNCIONA"

Criar três etapas:

### 01 — Cadastre seu negócio

Configure sua empresa, serviços e profissionais.

### 02 — Organize sua operação

Gerencie clientes e agendamentos pelo painel.

### 03 — Cresça

Use seus dados e sua presença digital para melhorar o negócio.

---

# 9. SEÇÃO DE RECURSOS

Criar uma seção visual mostrando:

* Dashboard
* Agenda
* Clientes
* Serviços
* Profissionais
* Relatórios

Cada recurso deve ter:

* Ícone
* Título
* Descrição
* Pequena representação visual

---

# 10. PLANOS

Criar três planos.

## ESSENCIAL

**R$ 59/mês**

Inclui:

* Página profissional
* Hospedagem
* SSL
* Suporte
* Atualizações

Botão:

**Começar agora**

---

## PROFISSIONAL

**R$ 99/mês**

Marcar como:

**Mais popular**

Inclui:

* Tudo do Essencial
* Agenda online
* Clientes
* Serviços
* Dashboard
* Profissionais

Botão:

**Começar agora**

---

## PREMIUM

**R$ 199/mês**

Inclui:

* Tudo do Profissional
* Múltiplos profissionais
* Relatórios avançados
* Recursos avançados
* Personalizações

Botão:

**Começar agora**

Os preços são apenas valores iniciais de demonstração e devem ser facilmente alteráveis posteriormente.

---

# 11. FAQ

Criar perguntas:

### Preciso instalar algum programa?

Não. O NexaFlow funciona diretamente pelo navegador.

### Posso acessar pelo celular?

Sim. A plataforma deve ser totalmente responsiva.

### Posso cadastrar vários funcionários?

Sim, dependendo do plano contratado.

### Meus dados ficam separados de outras empresas?

Sim. A arquitetura será preparada para isolamento de dados por empresa.

### Posso cancelar?

O sistema deverá permitir gerenciamento de assinatura futuramente.

---

# 12. FOOTER

Criar footer profissional contendo:

NexaFlow

"Gestão simples para negócios que querem crescer."

Links:

* Recursos
* Planos
* FAQ
* Termos
* Privacidade
* Contato

Adicionar copyright:

© 2026 NexaFlow. Todos os direitos reservados.

---

# 13. LOGIN

Criar página de login moderna.

Layout dividido em duas partes no desktop.

Esquerda:

Mensagem de marketing:

**Bem-vindo de volta.**

"Continue gerenciando seu negócio de forma simples e inteligente."

Direita:

Card de login.

Campos:

* E-mail
* Senha

Botão:

**Entrar**

Links:

* Esqueci minha senha
* Criar conta

Adicionar opção:

**Continuar com Google**

Mas deixar a integração apenas visual nesta etapa.

---

# 14. CADASTRO

Criar página:

**Crie sua conta**

Campos:

* Nome
* E-mail
* Senha
* Confirmar senha

Checkbox:

"Concordo com os termos de uso e política de privacidade."

Botão:

**Criar conta**

Após o cadastro, direcionar visualmente para o onboarding.

---

# 15. ONBOARDING

Criar um fluxo de configuração inicial.

Etapa 1:

**Sobre seu negócio**

Campos:

* Nome da empresa
* Segmento
* Telefone
* WhatsApp

Etapa 2:

**Localização**

Campos:

* CEP
* Endereço
* Número
* Cidade
* Estado

Etapa 3:

**Horários**

Permitir configurar:

* Segunda
* Terça
* Quarta
* Quinta
* Sexta
* Sábado
* Domingo

Etapa 4:

**Pronto!**

Mensagem:

**Seu espaço está pronto para começar.**

Botão:

**Ir para o dashboard**

Criar indicador visual de progresso.

---

# 16. DASHBOARD

Criar o painel principal.

Layout:

Sidebar fixa no desktop.

No celular, utilizar menu lateral retrátil.

Sidebar:

Logo NexaFlow

Menu:

Dashboard
Agenda
Clientes
Serviços
Profissionais
Relatórios

Separador

Configurações

Ajuda

No final:

Avatar do usuário

Nome:

"Administrador"

Empresa:

"Barbearia Imperial"

---

# 17. HEADER DO DASHBOARD

Mostrar:

"Bom dia, João 👋"

"Veja o que está acontecendo no seu negócio hoje."

No lado direito:

* Busca
* Notificações
* Avatar

---

# 18. CARDS DO DASHBOARD

Criar quatro cards:

### Agendamentos hoje

12

### Clientes

148

### Serviços

8

### Faturamento estimado

R$ 2.840

Utilizar pequenos indicadores de crescimento.

Exemplo:

+12% este mês

---

# 19. GRÁFICO

Criar gráfico de agendamentos.

Filtros:

* 7 dias
* 30 dias
* 3 meses

Mostrar visualmente a quantidade de agendamentos.

Utilizar Chart.js ou uma biblioteca compatível.

---

# 20. PRÓXIMOS AGENDAMENTOS

Criar tabela/lista:

Cliente | Serviço | Profissional | Horário | Status

Exemplos:

João Silva | Corte | Carlos | 14:30 | Confirmado

Pedro Santos | Barba | Lucas | 15:00 | Confirmado

Marcos Oliveira | Corte + Barba | Carlos | 16:30 | Pendente

Utilizar badges para os status.

---

# 21. AGENDA

Criar página completa de agenda.

Permitir visualização:

* Dia
* Semana
* Lista

Criar calendário visual.

Botão:

**+ Novo agendamento**

Ao clicar, abrir modal.

Campos:

* Cliente
* Serviço
* Profissional
* Data
* Horário
* Observação

Status:

* Pendente
* Confirmado
* Concluído
* Cancelado

Nesta etapa, utilizar dados mockados.

---

# 22. CLIENTES

Criar página de gerenciamento de clientes.

Topo:

**Clientes**

"Gerencie os clientes do seu negócio."

Botão:

**+ Novo cliente**

Criar:

* Busca
* Filtros
* Tabela

Colunas:

* Cliente
* Telefone
* Último atendimento
* Total de agendamentos
* Status
* Ações

Criar modal para adicionar cliente.

---

# 23. PERFIL DO CLIENTE

Criar página ou modal detalhado.

Mostrar:

* Nome
* Foto/avatar
* Telefone
* E-mail
* Observações

E abaixo:

**Histórico de agendamentos**

Tabela com:

* Data
* Serviço
* Profissional
* Valor
* Status

---

# 24. SERVIÇOS

Criar gerenciamento de serviços.

Exemplos:

Corte masculino — R$ 35 — 30 min

Barba — R$ 25 — 20 min

Corte + Barba — R$ 55 — 50 min

Criar cards ou tabela.

Cada serviço deve ter:

* Nome
* Descrição
* Preço
* Duração
* Status

Botão:

**+ Novo serviço**

---

# 25. PROFISSIONAIS

Criar página para gerenciamento de profissionais.

Cards contendo:

* Foto
* Nome
* Especialidade
* Serviços
* Status

Exemplo:

Carlos Almeida

Barbeiro

8 serviços

Ativo

Botão:

**Adicionar profissional**

---

# 26. RELATÓRIOS

Criar dashboard de relatórios.

Cards:

* Faturamento
* Agendamentos
* Novos clientes
* Ticket médio

Gráficos:

* Agendamentos por período
* Serviços mais realizados
* Faturamento mensal
* Clientes novos

Adicionar filtros:

* Hoje
* 7 dias
* 30 dias
* 3 meses
* Personalizado

---

# 27. CONFIGURAÇÕES

Criar página com abas:

### Empresa

* Nome
* Logo
* Telefone
* WhatsApp
* Endereço

### Aparência

Permitir configurar:

* Logo
* Cor principal
* Cor secundária
* Tema

### Horários

Configuração dos dias e horários de funcionamento.

### Conta

* Nome
* E-mail
* Senha

### Notificações

Opções visuais para:

* E-mail
* WhatsApp
* Lembretes

---

# 28. PÁGINA PÚBLICA DA EMPRESA

Criar uma demonstração de como ficará o site público de uma empresa.

Utilizar:

**Barbearia Imperial**

Hero:

\"Seu estilo começa aqui.\"

Mostrar:

* Logo
* Foto principal
* Serviços
* Profissionais
* Horários
* Localização
* Avaliações
* Botão \"Agendar horário\"

Criar fluxo visual de agendamento.

---

# 29. MODAL DE AGENDAMENTO

Criar experiência simples:

### Escolha o serviço

Corte
Barba
Corte + Barba

↓

### Escolha o profissional

Carlos
Lucas

↓

### Escolha a data

Calendário

↓

### Escolha o horário

14:00
14:30
15:00
15:30

↓

### Seus dados

Nome
Telefone

↓

### Confirmar

Mostrar uma tela final:

**Agendamento confirmado!**

---

# 30. RESPONSIVIDADE

A aplicação deve ser excelente em:

* Desktop
* Notebook
* Tablet
* Celular

No celular:

* Sidebar vira menu retrátil.
* Tabelas devem possuir comportamento responsivo.
* Cards devem se reorganizar.
* Botões devem continuar fáceis de tocar.
* Agenda deve funcionar perfeitamente.
* Modais devem ocupar espaço adequado.

Não simplesmente diminua os elementos.

Adapte o layout para cada tamanho de tela.

---

# 31. UX/UI

Priorizar:

* Hierarquia visual clara.
* Espaçamento consistente.
* Tipografia moderna.
* Bordas arredondadas moderadamente.
* Sombras suaves.
* Ícones consistentes.
* Estados de hover.
* Estados de loading.
* Estados vazios.
* Mensagens de sucesso.
* Mensagens de erro.
* Confirmações antes de ações destrutivas.

Criar microinterações sutis.

Evitar animações exageradas.

---

# 32. DARK MODE

Adicionar suporte a:

* Light Mode
* Dark Mode

Criar botão para alternar o tema.

O dark mode deve ser cuidadosamente desenvolvido e não apenas inverter as cores.

---

# 33. DADOS MOCKADOS

Utilizar dados fictícios realistas.

Empresa:

**Barbearia Imperial**

Clientes:

* João Silva
* Pedro Santos
* Marcos Oliveira
* Lucas Ferreira
* Rafael Costa

Profissionais:

* Carlos Almeida
* Lucas Martins

Serviços:

* Corte
* Barba
* Corte + Barba
* Sobrancelha

Os dados devem ser centralizados em arquivos próprios para facilitar a substituição futura por dados do Supabase.

---

# 34. ARQUITETURA PREPARADA PARA MULTI-TENANT

Mesmo utilizando dados mockados, organize o código pensando no futuro.

Conceito:

company_id

Cada registro futuro deverá estar associado a uma empresa.

Estrutura conceitual:

companies

users

customers

professionals

services

appointments

subscriptions

settings

Não implementar o banco agora.

Apenas preparar a estrutura da aplicação para isso.

---

# 35. COMPONENTES REUTILIZÁVEIS

Criar componentes reutilizáveis:

* Button
* Card
* Modal
* Input
* Select
* Badge
* Avatar
* Table
* Dropdown
* Sidebar
* Header
* Calendar
* EmptyState
* LoadingState
* Toast

Evitar duplicação de código.

---

# 36. ESTADOS VAZIOS

Criar estados para quando não houver dados.

Exemplo:

\"Você ainda não possui clientes.\"

Botão:

**Adicionar primeiro cliente**

Fazer isso para:

* Clientes
* Serviços
* Profissionais
* Agendamentos
* Relatórios

---

# 37. EXPERIÊNCIA DE PRIMEIRO ACESSO

Se o usuário ainda não tiver configurado a empresa:

mostrar:

**Vamos configurar seu negócio?**

Checklist:

✓ Criar empresa

✓ Adicionar primeiro serviço

○ Adicionar profissional

○ Configurar horários

○ Publicar página

Mostrar progresso:

**40% concluído**

---

# 38. REGRAS IMPORTANTES

NÃO criar funcionalidades fictícias que não foram solicitadas.

NÃO adicionar blockchain.

NÃO adicionar criptomoedas.

NÃO adicionar funcionalidades desnecessárias.

NÃO criar um sistema financeiro completo nesta etapa.

NÃO implementar pagamentos nesta primeira versão.

NÃO implementar IA ainda.

NÃO conectar APIs externas sem necessidade.

O objetivo é criar uma **base sólida de interface para o SaaS**.

---

# 39. QUALIDADE DO CÓDIGO

O código deve ser:

* Limpo
* Organizado
* Tipado
* Componentizado
* Fácil de manter
* Fácil de expandir
* Responsivo
* Sem código duplicado desnecessário

Utilizar nomes claros para componentes e funções.

---

# 40. RESULTADO ESPERADO

Ao finalizar, quero uma aplicação que pareça um SaaS comercial real.

Deve ser possível navegar visualmente por:

Landing Page

↓

Login

↓

Cadastro

↓

Onboarding

↓

Dashboard

↓

Agenda

↓

Clientes

↓

Serviços

↓

Profissionais

↓

Relatórios

↓

Configurações

↓

Página pública da empresa

Todas as telas devem estar conectadas através da navegação.

Utilize dados mockados para tornar a experiência demonstrável.

O projeto deve estar preparado para, em uma segunda etapa, conectar o Supabase e transformar os dados mockados em dados reais.

**Prioridade máxima: qualidade visual + UX + organização do código + responsividade + arquitetura preparada para evolução.**

Não tente construir o produto inteiro agora.

Construa uma V1 visual extremamente bem acabada.
*/

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
