import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import nextlogicLogo from "@/assets/nextlogic-logo.png";
import { getImobiProHomeUrl } from "@/lib/imobipro";

const NextLogicHeader = () => {
  const handleBackToImobiPro = () => {
    window.location.href = getImobiProHomeUrl();
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)] -z-10" />
      
      <div className="container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <img 
            src={nextlogicLogo} 
            alt="Next Logic" 
            className="h-32 md:h-40 mx-auto mb-8 hover-scale" 
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent leading-tight">
            Transformando Ideias em Soluções Tecnológicas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos produtos inovadores que impulsionam negócios e simplificam processos com tecnologia de ponta
          </p>

          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-8 py-6 text-base shadow-sm hover:shadow-md"
              onClick={handleBackToImobiPro}
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Home do iMobiPRO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLogicHeader;
