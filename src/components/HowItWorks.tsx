import { FileUp, Target, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    step: "01",
    title: "Cadastre seus imóveis",
    description: "Adicione seus imóveis com fotos, descrições completas e crie um portfólio profissional"
  },
  {
    icon: Target,
    step: "02",
    title: "Gerencie seus leads",
    description: "Use o CRM com pipeline visual para acompanhar cada cliente do primeiro contato ao fechamento"
  },
  {
    icon: Zap,
    step: "03",
    title: "Automatize cobranças",
    description: "Configure os aluguéis e deixe o sistema gerenciar pagamentos e enviar cobranças automaticamente"
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Acompanhe resultados",
    description: "Veja métricas, status de pagamentos e evolução das vendas em tempo real"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e eficiente em 4 passos
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
