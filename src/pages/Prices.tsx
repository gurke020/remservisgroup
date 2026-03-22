import {
  Wind, Wrench, Settings, Thermometer, Droplets, Fan
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/components/useScrollReveal";

const prices = [
  {
    icon: Wind,
    title: "Чистка кондиционера",
    rows: [
      { name: "Чистка внутреннего блока", price: "8 000 ₸" },
      { name: "Чистка наружного блока", price: "8 000 ₸" },
      { name: "Глубокая разборная чистка", price: "15 000 ₸" },
      { name: "Чистка дренажной системы", price: "5 000 ₸" },
    ],
  },
  {
    icon: Wrench,
    title: "Ремонт",
    rows: [
      { name: "Диагностика неисправности", price: "от 3 000 ₸" },
      { name: "Замена компрессора", price: "от 35 000 ₸" },
      { name: "Ремонт платы управления", price: "от 15 000 ₸" },
      { name: "Замена вентилятора", price: "от 10 000 ₸" },
      { name: "Устранение утечки (пайка)", price: "от 8 000 ₸" },
    ],
  },
  {
    icon: Settings,
    title: "Установка",
    rows: [
      { name: "Стандартный монтаж (до 3 м)", price: "от 15 000 ₸" },
      { name: "Монтаж в штробе", price: "от 25 000 ₸" },
      { name: "Демонтаж / перенос", price: "от 8 000 ₸" },
    ],
  },
  {
    icon: Droplets,
    title: "Заправка фреоном",
    rows: [
      { name: "Дозаправка R-410A / R-32", price: "от 6 000 ₸" },
      { name: "Полная замена хладагента", price: "от 12 000 ₸" },
    ],
  },
];

const PricesPage = () => {
  const ref = useScrollReveal();

  return (
    <div className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Прайс-лист
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-balance mb-4">
          Прозрачные цены без&nbsp;скрытых доплат
        </h1>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12">
          Точная стоимость зависит от модели и сложности. Диагностика бесплатна при&nbsp;заказе ремонта.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {prices.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl border border-border/40 shadow-[0_1px_3px_hsl(211_65%_45%/0.06)] overflow-hidden"
            >
              <div className="flex items-center gap-3 p-5 pb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <cat.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-lg font-semibold">{cat.title}</h2>
              </div>
              <div className="px-5 pb-5">
                <table className="w-full text-sm">
                  <tbody>
                    {cat.rows.map((r, i) => (
                      <tr key={r.name} className={i > 0 ? "border-t border-border/30" : ""}>
                        <td className="py-2.5 text-muted-foreground pr-4">{r.name}</td>
                        <td className="py-2.5 text-right font-semibold text-foreground whitespace-nowrap tabular-nums">
                          {r.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Нужен точный расчёт? Оставьте заявку.</p>
          <Button asChild size="lg">
            <Link to="/contacts">Узнать стоимость</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
