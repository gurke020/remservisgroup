import {
  Wind, Wrench, Settings, Thermometer, Droplets,
  Fan, Zap, Gauge, ShieldCheck, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/components/useScrollReveal";

const categories = [
  {
    title: "Чистка кондиционера",
    icon: Wind,
    items: [
      "Чистка внутреннего блока с антибактериальной обработкой",
      "Чистка наружного блока (мойка керхером)",
      "Глубокая разборная чистка с парогенератором",
      "Чистка дренажной системы",
    ],
  },
  {
    title: "Ремонт кондиционера",
    icon: Wrench,
    items: [
      "Замена компрессора",
      "Ремонт и замена платы управления",
      "Замена вентилятора внутреннего / наружного блока",
      "Устранение утечки фреона, пайка трассы",
      "Замена датчиков температуры",
    ],
  },
  {
    title: "Установка кондиционера",
    icon: Settings,
    items: [
      "Стандартный монтаж сплит-системы (до 3 м трассы)",
      "Монтаж с прокладкой трассы в штробе",
      "Установка мульти-сплит систем",
      "Демонтаж и перенос кондиционера",
    ],
  },
  {
    title: "Диагностика",
    icon: Thermometer,
    items: [
      "Полная диагностика сплит-системы",
      "Проверка давления в контуре",
      "Проверка электрических цепей и компонентов",
      "Тестирование работы всех режимов",
    ],
  },
  {
    title: "Заправка фреоном",
    icon: Droplets,
    items: [
      "Дозаправка хладагентом R-410A / R-32",
      "Полная замена фреона с вакуумированием",
      "Проверка герметичности перед заправкой",
    ],
  },
  {
    title: "Дополнительные услуги",
    icon: Fan,
    items: [
      "Замена пульта управления (оригинал / универсал)",
      "Прокладка дополнительной трассы (за 1 п.м.)",
      "Установка защитного козырька на наружный блок",
      "Подключение к Wi-Fi модулю управления",
    ],
  },
];

const ServicesPage = () => {
  const ref = useScrollReveal();

  return (
    <div className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Полный список
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Все наши услуги
        </h1>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl p-6 border border-border/40 shadow-[0_1px_3px_hsl(211_65%_45%/0.06)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-lg font-semibold">{cat.title}</h2>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" strokeWidth={1.8} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Не нашли свою услугу? Свяжитесь — поможем.</p>
          <Button asChild size="lg">
            <Link to="/contacts">
              Оставить заявку
              <ArrowRight className="!size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
