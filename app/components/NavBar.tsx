'use client';

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-14">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">São Marcos Odontologia</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-secondary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-secondary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-secondary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-foreground hover:text-secondary transition-colors">
              Depoimentos
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-secondary">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-secondary transition-colors text-left">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-secondary transition-colors text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-secondary transition-colors text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-foreground hover:text-secondary transition-colors text-left">
              Depoimentos
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-secondary w-full">
              Agendar Consulta
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;