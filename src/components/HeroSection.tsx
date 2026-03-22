import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 94 07";
const WA_LINK = `https://wa.me/77086309407?text=${encodeURIComponent("Здравствуйте! Хочу вызвать мастера по кондиционерам.")}`;

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(211 65% 45%) 0%, hsl(205 72% 38%) 50%, hsl(199 80% 42%) 100%)" }}
    >
      {/* Subtle decorative shapes */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-[0.07] bg-white" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[40vw] h-[40vw] rounded-full opacity-[0.05] bg-white" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-reveal-up">
          
          {/* Company name */}
          <p className="text-white/50 font-semibold text-xs tracking-[0.25em] uppercase">
            Remservisgroup
          </p>

          {/* Headline */}
          <h1 className="text-[2.25rem] md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] text-balance">
            Кондиционер сломался, шумит или&nbsp;не&nbsp;холодит?
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto leading-relaxed text-balance">
            Приедем сегодня, починим и&nbsp;почистим. Работаем без&nbsp;выходных с&nbsp;гарантией на&nbsp;все&nbsp;работы.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild variant="hero" size="xl">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-5" />
                Вызвать мастера
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="!size-5" />
                Написать в WhatsApp
              </a>
            </Button>
          </div>

          {/* Phone number */}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-lg font-medium tracking-wide"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 text-white/45 text-sm">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Диагностика · Ремонт · Чистка · Заправка · Установка</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
