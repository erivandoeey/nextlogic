import NextLogicHeader from "@/components/NextLogicHeader";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketData from "@/components/MarketData";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NextLogicHeader />
      <Team />
      <Products />
      <Hero />
      <Features />
      <MarketData />
      <Differentials />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
