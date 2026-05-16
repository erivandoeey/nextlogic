import { TrendingUp, Users, Search, Building2 } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "353.950",
    label: "unidades vendidas",
    period: "nos últimos 12 meses",
    source: "CBIC, 2024"
  },
  {
    icon: TrendingUp,
    value: "R$ 68bi",
    label: "em vendas no 2º trimestre",
    period: "de 2025",
    source: "CNN Brasil"
  },
  {
    icon: Search,
    value: "85%",
    label: "das buscas começam online",
    period: "antes de contatar um corretor",
    source: "DataZAP+, 2024"
  },
  {
    icon: Users,
    value: "430.000+",
    label: "corretores ativos",
    period: "no Brasil",
    source: "COFECI-CRECI, 2023"
  }
];

const MarketData = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-primary">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Um mercado em <span className="text-secondary">crescimento</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            O mercado imobiliário brasileiro está mais aquecido do que nunca. Veja os números:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur border-2 border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-white/90 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-white/70 mb-3">{stat.period}</div>
                <div className="text-xs text-white/60 italic">{stat.source}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketData;