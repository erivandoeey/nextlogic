import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background -z-10" />
      
      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Imobi PRO" className="w-48 h-auto" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Plataforma completa para gestão imobiliária
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforme sua{" "}
            <span className="text-gradient">gestão imobiliária</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sistema completo de gestão, CRM com pipeline visual e automação financeira para corretores, imobiliárias e autônomos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              Conhecer a plataforma
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver funcionalidades
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Automação</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-secondary">3x</div>
              <div className="text-sm text-muted-foreground">Mais Eficiência</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">0</div>
              <div className="text-sm text-muted-foreground">Erros de Cobrança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
