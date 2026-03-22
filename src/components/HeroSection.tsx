import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ac.jpg";

const PHONE = "+77086309407";
const WA_LINK = `https://wa.me/77086309407?text=${encodeURIComponent("Здравствуйте! Хочу узнать о сервисе кондиционеров.")}`;

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Мастер устанавливает кондиционер"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsla(211,65%,30%,0.92) 0%, hsla(199,80%,35%,0.85) 100%)" }}
        />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-xl space-y-6 animate-reveal-up">
          <p className="text-white/80 font-medium text-sm tracking-widest uppercase">
            Remservisgroup
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] text-balance">
            Обслуживание кондиционеров с&nbsp;гарантией
          </h1>
          <p className="text-lg text-white/85 max-w-md leading-relaxed">
            Установка, ремонт, чистка и&nbsp;заправка. Выезд мастера в&nbsp;день обращения.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild variant="hero" size="xl">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-5" />
                Позвонить
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="!size-5" />
                Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
