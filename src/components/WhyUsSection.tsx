import { Clock, Search, ShieldCheck, UserCheck } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const points = [
  {
    icon: Clock,
    title: "Выезд в день обращения",
    desc: "Оставьте заявку до 16:00 — мастер приедет сегодня. Не заставляем ждать в жару.",
  },
  {
    icon: Search,
    title: "Честная диагностика",
    desc: "Называем причину поломки до начала ремонта. Не навязываем лишних услуг.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на работу",
    desc: "Даём гарантию до 12 месяцев на все виды работ и установленные запчасти.",
  },
  {
    icon: UserCheck,
    title: "Опытные мастера",
    desc: "Сертифицированные специалисты с опытом обслуживания всех марок кондиционеров.",
  },
];

const WhyUsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="why-us" className="section-padding section-alt" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Почему мы
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Работаем так, чтобы вы&nbsp;рекомендовали нас&nbsp;друзьям
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-4 bg-card rounded-xl p-5 shadow-[0_1px_3px_hsl(211_65%_45%/0.05)] border border-border/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
