import { MessageCircle } from 'lucide-react';

/**
 * FloatingWhatsApp - Botão flutuante de WhatsApp
 * Design: Minimalismo Moderno
 * - Posicionado no canto inferior direito
 * - Animação de pulsação suave com scale
 * - Abre conversa no WhatsApp
 */

const WHATSAPP_NUMBER = '73991060416';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de mais informações sobre os serviços de motorista.';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-28 right-4 md:right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
      style={{
        animation: 'pulse-custom 3s ease-in-out infinite',
      }}
      title="Enviar mensagem no WhatsApp"
      aria-label="Enviar mensagem no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
