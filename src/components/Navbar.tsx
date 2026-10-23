import React, { useState } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Calendar, 
  Menu, 
  X, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { 
  WHATSAPP_DISPLAY, 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL, 
  getWhatsAppLink 
} from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre a Dra.', href: '#sobre' },
    { label: 'Lipedema', href: '#lipedema' },
    { label: 'Acompanhamento', href: '#acompanhamento' },
    { label: 'Protocolos', href: '#protocolos' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F3]/95 backdrop-blur-md border-b border-[#E8C5B0]/40 transition-all duration-200">
      {/* Top micro announcement bar */}
      <div className="bg-[#2C1E18] text-[#FAF6F3] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B69F] animate-pulse"></span>
            <span className="text-[#E8C5B0] font-medium">Clínica em Fortaleza · CE</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80">Atendimento personalizado com foco em saúde feminina & lipedema</span>
          </div>
          <div className="flex items-center gap-4 text-xs ml-auto">
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E8C5B0] hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <span className="text-white/30 hidden xs:inline">·</span>
            <a 
              href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de informações sobre consultas e tratamentos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:flex items-center gap-1.5 text-white/90 hover:text-[#E8C5B0] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E5B69F]" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a href="#inicio" className="group flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#2C1E18] group-hover:text-[#B86B52] transition-colors">
              Dra. Ana Vládia
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#6E5345]">
              Farmacêutica Esteta · CRF/CE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#48342B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B86B52] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B86B52] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#B86B52] border border-[#B86B52]/40 rounded-full hover:bg-[#F3E5DE] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B86B52]" />
              <span>Teste de Lipedema</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B86B52] hover:bg-[#A05942] rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Consulta</span>
            </button>

            <a
              href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de agendar uma consulta pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 bg-[#25D366]/15 text-[#1b7a3e] hover:bg-[#25D366] hover:text-white rounded-full transition-all"
              title="Fale no WhatsApp (+55 85 99730-5370)"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#B86B52] rounded-full cursor-pointer"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C1E18] hover:text-[#B86B52] transition-colors focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E8C5B0]/30 bg-[#FAF6F3] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#2C1E18]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 hover:text-[#B86B52] border-b border-[#E8C5B0]/20 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full py-2.5 text-sm font-semibold text-[#B86B52] border border-[#B86B52] rounded-full flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Autoavaliação de Lipedema</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#B86B52] rounded-full shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>

            <a
              href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de agendar uma consulta pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-medium text-[#1E7E34] bg-[#25D366]/15 hover:bg-[#25D366] hover:text-white rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
