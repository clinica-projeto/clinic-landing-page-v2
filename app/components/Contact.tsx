import { Clock, Phone, Pin } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Telefone",
    firstDescription: "(11) 3451-5477",
    secondDescription: "(19) 99744-4101",
  },
  {
    icon: Phone,
    title: "E-mail",
    firstDescription: "marianeb23@gmail.com",
    secondDescription: "",
  },
  {
    icon: Pin,
    title: "Endereço",
    firstDescription: "Rua São Marcos, 682, Jardim Bom Sucesso",
    secondDescription: "Santa Gertrudes - SP",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    firstDescription: "Segunda a Sexta: 8h ás 19h",
    secondDescription: "Sábado: 9h ás 14h",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Agende sua consulta e dê o primeiro passo para um sorriso mais bonito e saudável.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden shadow-xl shadow-black/10 h-[550px] bg-card border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2445650135405!2d-47.5392136!3d-22.457442099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7d0c5d11d4d43%3A0x3def5c72049ab34!2sS%C3%A3o%20Marcos%20Odontologia%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1764022838025!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da São Marcos Odontologia"
              className="w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-300"
            />

            <div className="flex flex-col gap-6 justify-center px-10 py-10 bg-background/60 backdrop-blur-sm">
              {contactDetails.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    className="flex gap-4 items-start hover:bg-accent hover:rounded-2xl p-3 rounded-xl transition-all cursor-default group"
                    key={index}
                  >
                    <div className="rounded-full p-3 bg-muted flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="text-secondary w-5 h-5" />
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="font-semibold text-lg text-foreground">
                        {value.title}
                      </span>
                      <span className="text-secondary text-sm">
                        {value.firstDescription}
                      </span>
                      {value.secondDescription && (
                        <span className="text-secondary text-sm">
                          {value.secondDescription}
                        </span>
                      )}
                    </div>
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

export default Contact;
