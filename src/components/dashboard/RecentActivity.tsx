import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, UserPlus, DollarSign, FileText } from "lucide-react";

const activities = [
  {
    icon: Building2,
    title: "Novo imóvel cadastrado",
    description: "Apartamento 3 quartos - Jardins",
    time: "Há 2 horas",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: UserPlus,
    title: "Novo lead capturado",
    description: "Maria Silva - Interessada em casa",
    time: "Há 3 horas",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: DollarSign,
    title: "Pagamento recebido",
    description: "Aluguel - Apt. Centro R$ 2.500",
    time: "Há 5 horas",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: FileText,
    title: "Contrato assinado",
    description: "Venda - Casa Brooklin",
    time: "Há 1 dia",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: Building2,
    title: "Imóvel atualizado",
    description: "Cobertura Moema - Status: Vendido",
    time: "Há 1 dia",
    color: "bg-orange-500/10 text-orange-500"
  }
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
