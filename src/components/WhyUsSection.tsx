import { Clock, Search, ShieldCheck, UserCheck } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const points = [
  {
    icon: Clock,
    title: "Круглосуточный выезд",
    desc: "Работаем 24/7 без выходных и праздников. Кондиционер сломался ночью — приедем и починим.",
  },
  {
    icon: Search,
    title: "Честная диагностика",
    desc: "Называем причину поломки до начала ремонта. Не навязываем лишних услуг.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия от 3 месяцев до 5 лет",
    desc: "Даём официальную гарантию на все виды работ и установленные запчасти — от 3 месяцев до 5 лет.",
  },
  {
    icon: UserCheck,
    title: "Мастера с опытом от 5 лет",
    desc: "Сертифицированные специалисты с опытом работы от 5 лет. Знаем все марки кондиционеров.",
  },
];

const WhyUsSection = () => {
  const headRef = useScrollReveal("up");

  return (
    <section id="why-us" className="section-padding section-alt">
      <div className="container">
        <div ref={headRef} style={{ opacity: 0 }} className="text-center mb-12">
          <p className="text-cta font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Почему мы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Работаем так, чтобы вы&nbsp;рекомендовали нас&nbsp;друзьям
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
          {points.map((p, i) => {
            const dir = i % 2 === 0 ? "left" : "right";
            const ref = useScrollReveal(dir);
            return (
              <div
                key={p.title}
                ref={ref}
                style={{ opacity: 0 }}
                className="flex gap-4 bg-card rounded-xl p-5 hover-lift border border-border/40"
              >
                <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-cta" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
