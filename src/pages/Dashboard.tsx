import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, DollarSign, Plus, Search, FileText, Calendar } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SalesChart from "@/components/dashboard/SalesChart";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  const stats = [
    {
      title: "Imóveis Cadastrados",
      value: "142",
      change: "+12% vs mês anterior",
      icon: Building2,
      trend: "up" as const
    },
    {
      title: "Leads Ativos",
      value: "38",
      change: "+5 novos hoje",
      icon: Users,
      trend: "up" as const
    },
    {
      title: "Vendas do Mês",
      value: "R$ 2.4M",
      change: "+18% vs mês anterior",
      icon: TrendingUp,
      trend: "up" as const
    },
    {
      title: "Cobranças Pendentes",
      value: "R$ 45K",
      change: "8 pendentes",
      icon: DollarSign,
      trend: "neutral" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo de volta! Aqui está o resumo do seu negócio.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-7 mb-8">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Desempenho de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <QuickActions />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RecentActivity />
          
          <Card>
            <CardHeader>
              <CardTitle>Pipeline de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { stage: "Aguardando Atendimento", count: 12, color: "bg-blue-500" },
                  { stage: "Em Atendimento", count: 8, color: "bg-yellow-500" },
                  { stage: "Aguardando Documentação", count: 5, color: "bg-orange-500" },
                  { stage: "Negociação", count: 7, color: "bg-purple-500" },
                  { stage: "Finalizado", count: 6, color: "bg-green-500" }
                ].map((stage, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                      <span className="text-sm font-medium">{stage.stage}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">{stage.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
