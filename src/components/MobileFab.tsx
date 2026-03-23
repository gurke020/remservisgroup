import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+77066656662";
const WA_LINK = "https://wa.me/77066656662?text=Здравствуйте!%20У%20меня%20проблема%20с%20кондиционером.";

const MobileFab = () => (
  <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:hidden">
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-white shadow-lg hover:shadow-xl transition-all active:scale-95"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href={`tel:${PHONE}`}
      className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all active:scale-95"
      aria-label="Позвонить"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default MobileFab;
