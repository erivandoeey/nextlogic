import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio (aqui você conectaria com seu backend)
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para <span className="text-gradient">transformar</span> seu negócio?
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato e descubra como o Imobi PRO pode revolucionar sua gestão imobiliária
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur rounded-3xl border-2 border-border p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero conhecer a plataforma"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
