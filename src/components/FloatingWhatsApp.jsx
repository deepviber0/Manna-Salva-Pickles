import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-wa text-white p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 animate-pulse flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-earth font-label text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Need help? Chat with us!
      </span>
    </a>
  );
}
