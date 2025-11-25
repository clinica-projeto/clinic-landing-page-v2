import { Award, GraduationCap, Sparkles, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import doctor1 from "@/public/foto-dra-1.jpg";
import doctor2 from "@/public/foto-dra-2.jpg";
import doctor3 from "@/public/foto-dra-3.jpg";
import doctor4 from "@/public/foto-dra-4.jpg";

const stats = [
  { icon: GraduationCap, value: "CRO-SP 98153", label: "Registro Profissional" },
  { icon: Award, value: "20+", label: "Cursos e Especializações" },
  { icon: Sparkles, value: "15+", label: "Anos de Experiência" },
  { icon: Heart, value: "3.000+", label: "Sorrisos Transformados" },
];

const Doctor = () => {
  return (
    <section id="doutora" className="py-20 bg-muted/30">
      <div className="container mx-auto px-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                      src={doctor1.src} 
                      alt="Dra. Maria Silva - Dentista" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={doctor2.src} 
                      alt="Dra. Maria durante atendimento" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={doctor3.src} 
                      alt="Dra. Maria realizando procedimento estético" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src={doctor4.src} 
                      alt="Dra. Maria com paciente" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Dra. Mariane Bertolo
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cirurgiã-dentista formada pela Fundação Hermínio Ometto (FHO), com especialização em Ortodontia. Com mais de 15 anos de experiência, 
              a Dra. Mariane dedica-se a transformar sorrisos e elevar a autoestima de seus pacientes.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Sua abordagem combina técnica avançada com um olhar humanizado, sempre priorizando o bem-estar e a satisfação de cada paciente. Acredita que um sorriso bonito e saudável é a chave para a confiança e qualidade de vida.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-background rounded-lg">
                    <Icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;