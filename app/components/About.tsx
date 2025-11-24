import { Award, Users, Clock, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import clinic1 from "@/public/recepcao1.jpeg";
import clinic2 from "@/public/recepcao2.jpeg";
import clinic3 from "@/public/mesa-cafe.jpeg";
import clinic4 from "@/public/fora1.jpeg";

const stats = [
  { icon: Users, value: "5.000+", label: "Pacientes Atendidos" },
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Clock, value: "98%", label: "Satisfação dos Clientes" },
  { icon: MapPin, value: "2", label: "Unidades" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a São Marcos Odontologia
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Com mais de 15 anos de experiência, a São Marcos Odontologia é referência em tratamentos odontológicos e estética facial na região. Nossa equipe multidisciplinar é formada por profissionais altamente qualificados e em constante atualização.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Utilizamos tecnologia de ponta e os melhores materiais do mercado para garantir tratamentos seguros, confortáveis e com resultados excepcionais. Nosso compromisso é com sua saúde, bem-estar e satisfação.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <Icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              // plugins={[
              //   Autoplay({
              //     delay: 3000,
              //   }),
              // ]}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={clinic1.src} 
                      alt="Recepção da São Marcos Odontologia" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={clinic2.src} 
                      alt="Sala de tratamento odontológico" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={clinic3.src} 
                      alt="Sala de estética facial" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={clinic4.src} 
                      alt="Equipamentos modernos da clínica" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;