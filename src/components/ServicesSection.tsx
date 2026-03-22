import { Wind, Wrench, Settings, Thermometer, Droplets } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: Wind,
    title: "Чистка кондиционера",
    desc: "Антибактериальная обработка и промывка обоих блоков — воздух снова свежий и без запаха.",
    price: "от 8 000 ₸",
  },
  {
    icon: Wrench,
    title: "Ремонт кондиционера",
    desc: "Устраним любую неисправность: компрессор, плата, датчики. Запчасти в наличии.",
    price: "от 5 000 ₸",
  },
  {
    icon: Settings,
    title: "Установка кондиционера",
    desc: "Монтаж сплит-системы с прокладкой трассы, вакуумированием и пуско-наладкой за один визит.",
    price: "от 15 000 ₸",
  },
  {
    icon: Thermometer,
    title: "Диагностика",
    desc: "Полная проверка системы с выявлением причины поломки и рекомендациями по ремонту.",
    price: "от 3 000 ₸",
  },
  {
    icon: Droplets,
    title: "Заправка фреоном",
    desc: "Дозаправка или полная замена хладагента с проверкой герметичности контура.",
    price: "от 6 000 ₸",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Услуги
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Решим любую проблему с&nbsp;кондиционером
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-xl p-6 shadow-[0_1px_3px_hsl(211_65%_45%/0.06),0_6px_16px_hsl(211_65%_45%/0.04)] hover:shadow-[0_2px_6px_hsl(211_65%_45%/0.1),0_12px_28px_hsl(211_65%_45%/0.08)] transition-shadow duration-300 border border-border/40 overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors duration-300">
                <s.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-semibold mb-1.5">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>

              <p className="text-primary font-bold text-sm">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
