import { Phone, MessageCircle, ShieldCheck, Sparkles, Snowflake, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 94 07";
const WA_LINK = `https://wa.me/77086309407?text=${encodeURIComponent("Здравствуйте! Хочу вызвать мастера по кондиционерам.")}`;

const snowflakes = [
  { top: "12%", left: "8%", size: 14, delay: "0s", duration: "6s" },
  { top: "25%", right: "12%", size: 10, delay: "1.5s", duration: "5s" },
  { top: "60%", left: "15%", size: 12, delay: "3s", duration: "7s" },
  { top: "45%", right: "22%", size: 9, delay: "0.8s", duration: "5.5s" },
  { top: "75%", left: "75%", size: 11, delay: "2.2s", duration: "6.5s" },
  { top: "18%", left: "85%", size: 8, delay: "4s", duration: "5s" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(211 65% 45%) 0%, hsl(205 72% 38%) 50%, hsl(199 80% 42%) 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full opacity-[0.06] bg-white animate-float" />
      <div className="absolute bottom-[-18%] left-[-8%] w-[35vw] h-[35vw] rounded-full opacity-[0.04] bg-white animate-float" style={{ animationDelay: "2s" }} />

      {/* Snowflakes */}
      {snowflakes.map((s, i) => (
        <Snowflake
          key={i}
          className="absolute text-white/20 animate-snowflake pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-7">
          
          {/* Badge */}
          <div className="animate-reveal-up inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
            <Sparkles className="w-3.5 h-3.5 text-cta" />
            Выезд мастера сегодня · Алматы
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
            Приедем сегодня в&nbsp;любой район Алматы, починим и&nbsp;почистим. Работаем без&nbsp;выходных с&nbsp;гарантией.
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
