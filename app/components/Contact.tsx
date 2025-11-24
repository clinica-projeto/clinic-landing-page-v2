import { Clock, Locate, LocateFixedIcon, Phone, Pin } from "lucide-react";

const contactDetails = [
  { icon: Phone, title: "Telefone", firstDescription: "(11) 3451-5477", secondDescription: "(19) 99744-4101" },
  { icon: Phone, title: "E-mail", firstDescription: "marianeb23@gmail.com", secondDescription: "" },
  { icon: Pin, title: "Endereço", firstDescription: "Rua São Marcos, 682, Jardim Bom Sucesso", secondDescription: "Santa Gertrudes - SP" },
  { icon: Clock, title: "Horário de Atendimento", firstDescription: "Segunda a Sexta: 8h ás 19h", secondDescription: "Sábado: 9h ás 14h" },
];


const Contact = () => {

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta e dê o primeiro passo para um sorriso mais bonito e saudável.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden shadow-lg h-120">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2445650135405!2d-47.5392136!3d-22.457442099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7d0c5d11d4d43%3A0x3def5c72049ab34!2sS%C3%A3o%20Marcos%20Odontologia%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1764022838025!5m2!1spt-BR!2sbr" 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da São Marcos Odontologia"
              className="w-full h-full"
            />

            <div className="flex flex-col gap-2 justify-center pl-10">
              
              {contactDetails.map((value, index) => {
                const Icon = value.icon;

                return (

                  <div className="flex gap-2 w-full" key={index}>
                    <div className="rounded-full p-2 bg-muted w-fit h-fit">
                      <Icon className="text-secondary"/>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="font-bold">{value.title}</span>
                      <span className="text-secondary">{value.firstDescription}</span>
                      <span className="text-secondary">{value.secondDescription}</span>
                    </div>
                  </div>
                )

              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;