import { Mail, Phone } from "lucide-react";
import { getImobiProHomeUrl } from "@/lib/imobipro";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Imobi PRO" className="w-40 h-auto" />
            <p className="text-muted-foreground">
              A plataforma completa para transformar sua gestão imobiliária
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@imobipro.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(00) 0000-0000</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Links Úteis</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Funcionalidades
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Entre em contato
              </a>
              <a
                href={getImobiProHomeUrl()}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Voltar para o iMobiPRO
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Imobi PRO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
