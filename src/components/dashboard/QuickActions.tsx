import { Button } from "@/components/ui/button";
import { Plus, Search, FileText, Calendar, Users, DollarSign } from "lucide-react";

const actions = [
  {
    icon: Plus,
    label: "Cadastrar Imóvel",
    description: "Adicionar novo imóvel",
    color: "bg-primary hover:bg-primary/90"
  },
  {
    icon: Users,
    label: "Novo Lead",
    description: "Registrar novo cliente",
    color: "bg-secondary hover:bg-secondary/90"
  },
  {
    icon: Search,
    label: "Buscar Imóvel",
    description: "Encontrar imóvel",
    color: "bg-primary/80 hover:bg-primary/70"
  },
  {
    icon: DollarSign,
    label: "Gerar Cobrança",
    description: "Criar nova cobrança",
    color: "bg-secondary/80 hover:bg-secondary/70"
  },
  {
    icon: FileText,
    label: "Relatórios",
    description: "Ver relatórios",
    color: "bg-accent hover:bg-accent/90"
  },
  {
    icon: Calendar,
    label: "Agendamentos",
    description: "Agendar visita",
    color: "bg-accent/80 hover:bg-accent/70"
  }
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Button
            key={index}
            variant="outline"
            className="h-auto p-4 flex flex-col items-start gap-2 hover:shadow-md transition-all"
          >
            <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center text-white`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default QuickActions;
