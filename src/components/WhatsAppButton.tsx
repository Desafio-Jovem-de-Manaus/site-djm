"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5592984446540?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20do%20Desafio%20Jovem%20de%20Manaus."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
