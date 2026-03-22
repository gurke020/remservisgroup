import { Phone, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 94 07";
const WA_LINK = `https://wa.me/77086309407?text=${encodeURIComponent("Здравствуйте! Хочу вызвать мастера по кондиционерам.")}`;

const HeroSection = () => {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(211 65% 45%) 0%, hsl(205 72% 38%) 50%, hsl(199 80% 42%) 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full opacity-[0.06] bg-white animate-float" />
      <div className="absolute bottom-[-18%] left-[-8%] w-[35vw] h-[35vw] rounded-full opacity-[0.04] bg-white animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[30%] right-[15%] w-[12vw] h-[12vw] rounded-full opacity-[0.03] bg-white animate-pulse-soft" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-7">
          
          {/* Badge */}
          <div className="animate-reveal-up inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
            <Sparkles className="w-3.5 h-3.5 text-cta" />
            Выезд мастера сегодня
          </div>

          {/* Company */}
          <p className="animate-reveal-up delay-1 text-white/45 font-semibold text-xs tracking-[0.25em] uppercase">
            Remservisgroup
          </p>

          {/* Headline */}
          <h1 className="animate-reveal-up delay-2 text-[2.25rem] md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] text-balance">
            Кондиционер сломался, шумит или&nbsp;не&nbsp;холодит?
          </h1>

          {/* Sub */}
          <p className="animate-reveal-up delay-3 text-lg md:text-xl text-white/80 max-w-lg mx-auto leading-relaxed text-balance">
            Приедем сегодня, починим и&nbsp;почистим. Работаем без&nbsp;выходных с&nbsp;гарантией на&nbsp;все&nbsp;работы.
          </p>

          {/* CTAs */}
          <div className="animate-reveal-up delay-4 flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild variant="hero" size="xl">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-5" />
                Вызвать мастера
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="!size-5" />
                Написать в WhatsApp
              </a>
            </Button>
          </div>

          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="animate-reveal-up delay-5 inline-flex items-center gap-2 text-white/65 hover:text-white transition-colors text-lg font-medium tracking-wide"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>

          {/* Trust */}
          <div className="animate-reveal-up delay-6 flex items-center justify-center gap-2 text-white/40 text-sm">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Диагностика · Ремонт · Чистка · Заправка · Установка</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
