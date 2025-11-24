'use cliente';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Sparkles, Shield, Heart } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Odontologia Estética",
    description: "Lentes de contato, facetas, clareamento dental e restaurações estéticas para um sorriso perfeito.",
  },
  {
    icon: Sparkles,
    title: "Estética Facial",
    description: "Harmonização facial, preenchimento, toxina botulínica e procedimentos para realçar sua beleza natural.",
  },
  {
    icon: Shield,
    title: "Implantodontia",
    description: "Implantes dentários com tecnologia de ponta para recuperar seu sorriso e função mastigatória.",
  },
  {
    icon: Heart,
    title: "Odontologia Geral",
    description: "Tratamentos preventivos, restaurações, tratamento de canal e acompanhamento completo da sua saúde bucal.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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