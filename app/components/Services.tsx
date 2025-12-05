'use cliente';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Braces, Sparkles, ShieldCheck, Layers, Brush, Component } from "lucide-react";

const services = [
  {
    icon: Braces,
    title: "Ortodontia",
    description: "Alinhamento dos dentes com aparelhos ortodônticos para um sorriso harmonioso.",
  },
  {
    icon: ShieldCheck,
    title: "Endodontia",
    description: "Tratamento de canal com técnicas avançadas para salvar dentes danificados.",
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Clareamento dental com técnicas avançadas para um sorriso mais brilhante.",
  },
  {
    icon: Layers,
    title: "Lente de Contato",
    description: "Lentes de contato em resina e porcelana.",
  },
  {
    icon: Brush,
    title: "Limpeza",
    description: "Raspagem e profilaxia para manter a saúde bucal.",
  },
  {
    icon: Component,
    title: "Prótese dental",
    description: "Prótese dentária para restaurar a função e o sorriso.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-14">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos e estéticos <br /> com tecnologia de última geração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;