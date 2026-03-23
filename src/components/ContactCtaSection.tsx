import { Phone, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "./useScrollReveal";

const PHONE = "+77066656662";
const PHONE_DISPLAY = "+7 706 665 66 62";
const WA_LINK = "https://wa.me/77066656662?text=Здравствуйте!%20У%20меня%20проблема%20с%20кондиционером.";

const ContactCtaSection = () => {
  const headRef = useScrollReveal("up");
  const btnRef = useScrollReveal("scale");

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, hsl(211 65% 45%) 0%, hsl(205 72% 38%) 50%, hsl(199 80% 42%) 100%)" }}
      />
      <div className="absolute top-[-30%] right-[-15%] w-[50vw] h-[50vw] rounded-full opacity-[0.06] bg-white animate-float" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[30vw] h-[30vw] rounded-full opacity-[0.04] bg-white animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 py-16 md:py-24 px-4 md:px-8">
        <div ref={headRef} style={{ opacity: 0 }} className="text-center mb-10 max-w-lg mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance leading-tight">
            Не&nbsp;терпите жару — позвоните&nbsp;сейчас
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Свяжитесь с&nbsp;нами любым удобным способом — перезвоним в&nbsp;течение 15&nbsp;минут и&nbsp;согласуем визит мастера.
          </p>
        </div>

        <div ref={btnRef} style={{ opacity: 0 }} className="max-w-md mx-auto space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button asChild variant="hero" size="xl" className="flex-1">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-5" />
                {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl" className="flex-1">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="!size-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <p className="flex items-center justify-center gap-1.5 text-xs text-white/50 text-center">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            Бесплатная консультация · Без&nbsp;обязательств
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
