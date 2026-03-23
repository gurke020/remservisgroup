import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const PHONE = "+77066656662";
const WA_LINK = "https://wa.me/77066656662?text=Здравствуйте!%20У%20меня%20проблема%20с%20кондиционером.";

const MobileFab = () => {
  const { pathname } = useLocation();
  const [scrollPast, setScrollPast] = useState(false);

  const isHome = pathname === "/";
  const isContacts = pathname === "/contacts";
  const isServices = pathname === "/services";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrollPast(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (isContacts || isServices) return null;

  const visible = isHome ? scrollPast : true;

  return (
    <div
      className={`fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:hidden transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-transparent transition-all active:scale-95 hover:scale-110"
        aria-label="WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-[4.25rem] h-[4.25rem] rounded-full shadow-lg" style={{ clipPath: 'circle(50%)' }} />
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
};

export default MobileFab;
