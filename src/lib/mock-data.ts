
export const mockData = {
  company: {
    id: "barbearia-imperial",
    name: "Barbearia Imperial",
    segment: "Beleza e Estética",
    phone: "(11) 99999-9999",
    whatsapp: "(11) 99999-9999",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    logo: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    hours: {
      segunda: "09:00 - 18:00",
      terca: "09:00 - 18:00",
      quarta: "09:00 - 18:00",
      quinta: "09:00 - 18:00",
      sexta: "09:00 - 18:00",
      sabado: "09:00 - 14:00",
      domingo: "Fechado",
    }
  },
  stats: {
    appointmentsToday: 12,
    totalCustomers: 148,
    totalServices: 8,
    estimatedRevenue: 2840,
    growth: {
      appointments: 12,
      customers: 8,
      revenue: 15
    }
  },
  customers: [
    { id: "1", name: "João Silva", email: "joao@exemplo.com", phone: "(11) 98888-7777", totalAppointments: 15, lastVisit: "2026-08-05", status: "Ativo" },
    { id: "2", name: "Pedro Santos", email: "pedro@exemplo.com", phone: "(11) 97777-6666", totalAppointments: 8, lastVisit: "2026-08-01", status: "Ativo" },
    { id: "3", name: "Marcos Oliveira", email: "marcos@exemplo.com", phone: "(11) 96666-5555", totalAppointments: 3, lastVisit: "2026-07-20", status: "Inativo" },
    { id: "4", name: "Lucas Ferreira", email: "lucas@exemplo.com", phone: "(11) 95555-4444", totalAppointments: 12, lastVisit: "2026-08-06", status: "Ativo" },
    { id: "5", name: "Rafael Costa", email: "rafael@exemplo.com", phone: "(11) 94444-3333", totalAppointments: 20, lastVisit: "2026-08-07", status: "Ativo" },
  ],
  professionals: [
    { id: "1", name: "Carlos Almeida", specialty: "Barbeiro Senior", services: 8, status: "Ativo", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { id: "2", name: "Lucas Martins", specialty: "Barbeiro", services: 5, status: "Ativo", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  ],
  services: [
    { id: "1", name: "Corte masculino", description: "Corte clássico ou moderno", price: 35, duration: 30, status: "Ativo" },
    { id: "2", name: "Barba", description: "Barba feita na navalha", price: 25, duration: 20, status: "Ativo" },
    { id: "3", name: "Corte + Barba", description: "Combo promocional", price: 55, duration: 50, status: "Ativo" },
    { id: "4", name: "Sobrancelha", description: "Limpeza de sobrancelha", price: 15, duration: 15, status: "Ativo" },
  ],
  appointments: [
    { id: "1", customer: "João Silva", service: "Corte", professional: "Carlos Almeida", time: "14:30", status: "Confirmado", date: "2026-08-07" },
    { id: "2", customer: "Pedro Santos", service: "Barba", professional: "Lucas Martins", time: "15:00", status: "Confirmado", date: "2026-08-07" },
    { id: "3", customer: "Marcos Oliveira", service: "Corte + Barba", professional: "Carlos Almeida", time: "16:30", status: "Pendente", date: "2026-08-07" },
  ]
};
