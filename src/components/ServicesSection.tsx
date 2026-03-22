import { Wrench, Wind, Settings, Thermometer, Droplets } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: Settings,
    title: "Установка",
    desc: "Монтаж сплит-систем любых марок с прокладкой трассы и пуско-наладкой.",
  },
  {
    icon: Wrench,
    title: "Ремонт",
    desc: "Диагностика и устранение неисправностей — компрессор, плата, датчики.",
  },
  {
    icon: Wind,
    title: "Чистка",
    desc: "Глубокая антибактериальная чистка внутреннего и наружного блоков.",
  },
  {
    icon: Thermometer,
    title: "Диагностика",
    desc: "Полная проверка системы с отчётом о состоянии и рекомендациями.",
  },
  {
    icon: Droplets,
    title: "Заправка фреоном",
    desc: "Дозаправка или полная замена хладагента с проверкой герметичности.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Наши услуги
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
