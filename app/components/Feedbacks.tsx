import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento! A equipe é muito profissional e atenciosa. Fiz implantes e estou muito satisfeita com o resultado.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Clínica moderna e bem equipada. Os profissionais são muito competentes e o resultado da harmonização facial ficou incrível!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    text: "Melhor clínica da região! Fiz clareamento dental e lentes de contato. Meu sorriso nunca esteve tão bonito. Super recomendo!",
    rating: 5,
  },
];

const Feedbacks = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {feedbacks.map((feedback, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&quot;{feedback.text}&quot;</p>
                <p className="font-semibold text-primary">— {feedback.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;