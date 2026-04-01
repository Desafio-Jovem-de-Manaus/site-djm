"use client";

import { useState } from "react";
import { ChevronDown, MessageSquareText } from "lucide-react";

interface FAQAccordionProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-xl mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left px-6 py-5 flex items-start justify-between focus:outline-none"
      >
        <div className="flex items-center">
          <MessageSquareText className={`w-5 h-5 mr-4 flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-slate-400'}`} />
          <span className={`font-bold text-lg md:text-xl pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-primary-dark'}`}>
            {question}
          </span>
        </div>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 mt-0.5 ${isOpen ? "rotate-180 text-primary" : "text-slate-400"}`} 
        />
      </button>
      
      {/* Container de resposta colapsável via altura máxima e invisibilidade para transição suave */}
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-6 pb-6 pt-2 pl-15">
          <div className="ml-9 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
