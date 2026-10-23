import React from 'react';
import { X, Calendar } from 'lucide-react';
import { BookingForm } from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProtocol?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose,
  selectedProtocol = ''
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6F3] rounded-3xl shadow-2xl border border-[#E8C5B0] overflow-hidden text-left flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Top bar */}
        <div className="px-6 py-4 bg-[#FAF4F0] border-b border-[#E8C5B0]/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#B86B52]/15 text-[#B86B52] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1E18]">
                Agendamento de Consulta
              </h3>
              <p className="text-[11px] text-[#6E5345]">Dra. Ana Vládia Brasileiro · Fortaleza/CE</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6E5345] hover:text-[#2C1E18] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <BookingForm 
            initialProtocol={selectedProtocol}
            isModal={true}
            onCloseModal={onClose}
          />
        </div>
      </div>
    </div>
  );
};
