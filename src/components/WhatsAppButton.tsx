
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Olá! Gostaria de mais informações sobre a FarmaSETE." 
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClick = () => {
    // Format the phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    
    // Create the WhatsApp URL with the phone number and message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
    >
      <button 
        onClick={handleClick}
        aria-label="Conversar pelo WhatsApp"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-3 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale conosco
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
