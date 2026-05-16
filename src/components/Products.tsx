import { Building2, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const products = [
  {
    name: "Imobi PRO",
    description: "Plataforma completa de gestão imobiliária com CRM, pipeline visual e automação financeira",
    icon: Building2,
    logo: logo,
    gradient: "from-primary/20 to-secondary/20",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Soluções desenvolvidas pela NextLogic para impulsionar seu negócio
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group relative p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-2 border-border/50 hover:border-primary/50 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="mb-8 flex justify-center">
                  <img src={product.logo} alt={product.name} className="h-24 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">{product.name}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
