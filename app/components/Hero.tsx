'use client';

import { Button } from "@/components/ui/button";
import heroImage from "@/public/hero-dental.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto relative z-10 px-14">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-14">
            Seu Sorriso é Nossa <br/> Especialidade
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tratamentos odontológicos e de estética facial de excelência, com <br /> tecnologia de ponta e equipe altamente qualificada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-8"
            >
              Agendar Consulta
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-muted text-lg px-8"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;