import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Zap, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Scissors, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Menu,
  X,
  Bell,
  Search
} from "lucide-react";
import { mockData } from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Agenda", icon: Calendar, path: "/agenda" },
    { label: "Clientes", icon: Users, path: "/clientes" },
    { label: "Serviços", icon: Scissors, path: "/servicos" },
    { label: "Profissionais", icon: Users, path: "/profissionais" },
    { label: "Relatórios", icon: BarChart3, path: "/relatorios" },
  ];

  const sidebarLinks = (
    <div className="flex flex-col h-full py-6 px-4">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Zap className="text-primary-foreground w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight">NexaFlow</span>
      </div>

      <nav className="flex-grow space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              currentPath === item.path 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="pt-6 mt-6 border-t space-y-1">
        <Link
          to="/configuracoes"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            currentPath === "/configuracoes" 
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <Settings className="w-5 h-5" />
          Configurações
        </Link>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground w-full transition-colors">
          <HelpCircle className="w-5 h-5" />
          Ajuda
        </button>
      </div>

      <div className="mt-8 pt-6 border-t flex items-center gap-3 px-2">
        <Avatar className="h-10 w-10">
          <AvatarFallback>ADM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold truncate">Administrador</span>
          <span className="text-xs text-muted-foreground truncate">{mockData.company.name}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 border-r bg-card fixed h-full z-30">
        {sidebarLinks}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed top-0 bottom-0 left-0 w-72 bg-card border-r z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {sidebarLinks}
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow lg:pl-72 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b bg-card/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex flex-col">
              <h2 className="text-sm font-bold">Bom dia, João 👋</h2>
              <p className="text-xs text-muted-foreground">Veja o que está acontecendo no seu negócio hoje.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 h-10 rounded-xl bg-muted border text-muted-foreground w-64">
              <Search className="w-4 h-4" />
              <span className="text-sm">Buscar...</span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </Button>
            <Avatar className="h-8 w-8 cursor-pointer border">
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-grow p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
