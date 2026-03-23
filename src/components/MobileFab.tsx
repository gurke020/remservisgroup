import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
        className="block w-14 h-14 shadow-lg hover:scale-110 transition-all active:scale-95 rounded-full"
        aria-label="WhatsApp"
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="28" fill="#25D366"/>
          <path d="M37.5 30.5c-.5-.2-2.8-1.4-3.2-1.6-.4-.1-.7-.2-1 .2s-1.1 1.4-1.4 1.7-.5.3-1 .1-2.1-.8-4-2.5c-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.6.7-.9.2-.3.3-.5.4-.8s.1-.6 0-.9c-.1-.3-.9-2.2-1.3-3.1-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-1.4 1.6-1.4 4.1 0 7.3 1.4 3.3 4.2 6.1 7.6 7.4 2.8 1.1 4.7 1.4 6.4 1.2 1.7-.2 3.5-1.1 4-2.1.5-1 .5-1.9.4-2.1-.1-.2-.4-.3-.9-.5z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M28 46c10.5 0 19-8.5 19-19S38.5 8 28 8 9 16.5 9 27c0 3.4.9 6.6 2.5 9.4L9 47l10.9-2.5c2.5 1 5.3 1.5 8.1 1.5zm0-34c8.3 0 15 6.7 15 15s-6.7 15-15 15c-2.7 0-5.3-.7-7.5-2.1l-.5-.3-5 1.1 1.2-4.8-.4-.6C14.2 33.7 13 30.4 13 27c0-8.3 6.7-15 15-15z" fill="white"/>
        </svg>
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
