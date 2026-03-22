import {
  Wind, Wrench, Settings, Thermometer, Droplets,
  Fan, ShieldCheck, ArrowRight
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
    prices: [
      { name: "Чистка внутреннего блока", price: "8 000 ₸" },
      { name: "Чистка наружного блока", price: "8 000 ₸" },
      { name: "Глубокая разборная чистка", price: "15 000 ₸" },
      { name: "Чистка дренажной системы", price: "5 000 ₸" },
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
    prices: [
      { name: "Диагностика неисправности", price: "от 3 000 ₸" },
      { name: "Замена компрессора", price: "от 35 000 ₸" },
      { name: "Ремонт платы управления", price: "от 15 000 ₸" },
      { name: "Замена вентилятора", price: "от 10 000 ₸" },
      { name: "Устранение утечки (пайка)", price: "от 8 000 ₸" },
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
    prices: [
      { name: "Стандартный монтаж (до 3 м)", price: "от 15 000 ₸" },
      { name: "Монтаж в штробе", price: "от 25 000 ₸" },
      { name: "Демонтаж / перенос", price: "от 8 000 ₸" },
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
    prices: [
      { name: "Полная диагностика", price: "от 3 000 ₸" },
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
    prices: [
      { name: "Дозаправка R-410A / R-32", price: "от 6 000 ₸" },
      { name: "Полная замена хладагента", price: "от 12 000 ₸" },
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
    prices: [],
  },
];

const ServicesPage = () => {
  const ref = useScrollReveal();

  return (
    <div className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Услуги и цены
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-balance mb-4">
          Все услуги с&nbsp;прозрачными ценами
        </h1>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12">
          Точная стоимость зависит от модели и сложности. Диагностика бесплатна при&nbsp;заказе ремонта.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl border border-border/40 shadow-[0_1px_3px_hsl(211_65%_45%/0.06)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-5 pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-lg font-semibold">{cat.title}</h2>
              </div>

              <div className="px-5 pb-5 space-y-4">
                {/* Service items */}
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" strokeWidth={1.8} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Prices */}
                {cat.prices.length > 0 && (
                  <div className="pt-3 border-t border-border/30">
                    <table className="w-full text-sm">
                      <tbody>
                        {cat.prices.map((r, i) => (
                          <tr key={r.name} className={i > 0 ? "border-t border-border/20" : ""}>
                            <td className="py-2 text-muted-foreground pr-4">{r.name}</td>
                            <td className="py-2 text-right font-semibold text-cta whitespace-nowrap tabular-nums">
                              {r.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Нужен точный расчёт? Оставьте заявку.</p>
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