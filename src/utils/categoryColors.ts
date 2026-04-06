import { 
  Users, 
  CalendarDays, 
  Building2, 
  Megaphone, 
  Award, 
  Heart,
  Newspaper
} from "lucide-react";
import React from "react";

export const getCategoryConfig = (cat: string) => {
  const normalized = cat.toLowerCase();
  
  if (normalized.includes("ação") || normalized.includes("ações")) {
    return {
      classes: "bg-blue-50 text-blue-700 border-blue-200",
      icon: Users
    };
  }
  
  if (normalized.includes("evento")) {
    return {
      classes: "bg-purple-50 text-purple-700 border-purple-200",
      icon: CalendarDays
    };
  }
  
  if (normalized.includes("institucional")) {
    return {
      classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: Building2
    };
  }
  
  if (normalized.includes("campanha")) {
    return {
      classes: "bg-orange-50 text-orange-700 border-orange-200",
      icon: Megaphone
    };
  }
  
  if (normalized.includes("reconhecimento")) {
    return {
      classes: "bg-amber-50 text-amber-700 border-amber-200",
      icon: Award
    };
  }
  
  if (normalized.includes("comunidade")) {
    return {
      classes: "bg-teal-50 text-teal-700 border-teal-200",
      icon: Heart
    };
  }

  return {
    classes: "bg-slate-50 text-slate-700 border-slate-200",
    icon: Newspaper
  };
};

// Mantemos por compatibilidade temporária se necessário, mas o ideal é usar o config completo
export const getCategoryColor = (cat: string) => getCategoryConfig(cat).classes;

