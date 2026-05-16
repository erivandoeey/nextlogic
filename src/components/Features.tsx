import { Home, Users, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Gestão Completa de Imóveis",
    description: "Cadastre imóveis com fotos e descrições detalhadas. Controle status (disponível, alugado, vendido) e crie um portfólio digital profissional.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Users,
    title: "CRM com Pipeline Visual",
    description: "Gerencie todo o funil de vendas do primeiro contato ao fechamento. Acompanhe cada cliente e nunca perca uma oportunidade de negócio.",
    gradient: "from-secondary to-primary-glow"
  },
  {
    icon: TrendingUp,
    title: "Busca Avançada e Inteligente",
    description: "Portal centralizado onde clientes encontram imóveis com filtros detalhados. Busca rápida, eficiente e com informações de qualidade.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Zap,
    title: "Automação Financeira",
    description: "Geração e envio automático de boletos, monitoramento de pagamentos e lembretes de cobrança. Zero erros, 100% automação.",
    gradient: "from-secondary to-primary"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tudo que você precisa em{" "}
            <span className="text-gradient">um só lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Funcionalidades poderosas pensadas para corretores, imobiliárias e autônomos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-up bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
