import { Check, Sparkles } from "lucide-react";

const differentials = [
  {
    title: "Gestão Centralizada",
    description: "Imóveis, clientes e finanças em um único sistema robusto. Elimine a desorganização e múltiplas ferramentas."
  },
  {
    title: "Automação Inteligente",
    description: "Cobranças automáticas, integração com pagamentos e lembretes. Economize horas de trabalho manual todo mês."
  },
  {
    title: "CRM Visual e Poderoso",
    description: "Pipeline visual para controlar todas as etapas da negociação. Do primeiro contato ao fechamento."
  },
  {
    title: "Zero Erros de Cobrança",
    description: "Sistema sincronizado que elimina erros manuais. Pagamentos monitorados e atualizados automaticamente."
  },
  {
    title: "Visibilidade Profissional",
    description: "Crie um portfólio digital completo que impressiona clientes e destaca seu trabalho."
  },
  {
    title: "Busca Otimizada",
    description: "Portal centralizado com filtros avançados. Clientes encontram o imóvel ideal rapidamente."
  }
];

const Differentials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Por que somos diferentes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              A melhor escolha para{" "}
              <span className="text-gradient">profissionais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recursos que fazem a diferença no seu dia a dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border-2 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{differential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
