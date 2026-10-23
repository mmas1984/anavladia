import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LipedemaSection } from './components/LipedemaSection';
import { IndividualizedCare } from './components/IndividualizedCare';
import { Protocols } from './components/Protocols';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';
import { LipedemaQuizModal } from './components/LipedemaQuizModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState('');

  const handleOpenBooking = (protocol: string = '') => {
    setSelectedProtocol(protocol);
    setIsBookingModalOpen(true);
  };

  const handleOpenQuiz = () => {
    setIsQuizModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F3] text-[#2C1E18] flex flex-col font-sans selection:bg-[#E8C5B0] selection:text-[#2C1E18]">
      {/* Sticky Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenQuiz={handleOpenQuiz} 
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenQuiz={handleOpenQuiz} 
        />

        {/* About Dra. Ana Vládia Brasileiro */}
        <About 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Deep Dive into Lipedema */}
        <LipedemaSection 
          onOpenBooking={() => handleOpenBooking('Avaliação & Tratamento de Lipedema')} 
          onOpenQuiz={handleOpenQuiz} 
        />

        {/* Individualized Professional Care Benefits */}
        <IndividualizedCare 
          onOpenBooking={() => handleOpenBooking('Acompanhamento Individualizado')} 
        />

        {/* Protocols & Services */}
        <Protocols 
          onOpenBooking={() => handleOpenBooking()} 
          onSelectProtocol={(title) => handleOpenBooking(title)} 
        />

        {/* Real Patient Stories & Results */}
        <Testimonials 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Official Instagram @anavladiabrasileiro */}
        <InstagramSection />

        {/* Dedicated In-page Booking Section */}
        <BookingForm 
          initialProtocol={selectedProtocol}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenQuiz={handleOpenQuiz} 
      />

      {/* Persistent WhatsApp Floating Action Button */}
      <WhatsAppFloat />

      {/* Global Interactive Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        selectedProtocol={selectedProtocol}
      />

      <LipedemaQuizModal 
        isOpen={isQuizModalOpen} 
        onClose={() => setIsQuizModalOpen(false)} 
        onOpenBooking={() => handleOpenBooking('Avaliação & Tratamento de Lipedema')}
      />
    </div>
  );
}
