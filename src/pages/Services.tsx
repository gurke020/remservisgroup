import {
  Wind, Wrench, Settings, Thermometer, Droplets,
  Fan, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/components/useScrollReveal";

const categories = [
  {
    title: "Диагностика",
    icon: Thermometer,
    rows: [
      { name: "Диагностика кондиционера", price: "от 5 000 ₸", note: "Бесплатно при ремонте" },
    ],
  },
  {
    title: "Чистка кондиционера",
    icon: Wind,
    rows: [
      { name: "Чистка кондиционера (внутренний блок)", price: "от 8 000 ₸", note: "С антибактериальной обработкой" },
      { name: "Чистка кондиционера (полная)", price: "от 12 000 ₸", note: "Внутренний + наружный блок" },
    ],
  },
  {
    title: "Заправка фреоном",
    icon: Droplets,
    rows: [
      { name: "Заправка фреоном R410A", price: "от 7 000 ₸", note: "За 100 грамм" },
      { name: "Заправка фреоном R32", price: "от 8 000 ₸", note: "За 100 грамм" },
    ],
  },
  {
    title: "Ремонт кондиционера",
    icon: Wrench,
    rows: [
      { name: "Ремонт платы управления", price: "от 12 000 ₸", note: "С заменой компонентов" },
      { name: "Замена компрессора", price: "от 35 000 ₸", note: "С заправкой фреона" },
      { name: "Замена вентилятора (внутренний блок)", price: "от 15 000 ₸", note: "С гарантией" },
      { name: "Замена вентилятора (наружный блок)", price: "от 18 000 ₸", note: "С гарантией" },
      { name: "Замена теплообменника", price: "от 25 000 ₸", note: "Внутренний блок" },
    ],
  },
  {
    title: "Установка и демонтаж",
    icon: Settings,
    rows: [
      { name: "Установка кондиционера", price: "от 25 000 ₸", note: "Стандартный монтаж" },
      { name: "Демонтаж кондиционера", price: "от 5 000 ₸", note: "С сохранением фреона" },
      { name: "Перенос кондиционера", price: "от 20 000 ₸", note: "Демонтаж + установка" },
    ],
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
              <div className="flex items-center gap-3 p-5 pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-lg font-semibold">{cat.title}</h2>
              </div>

              <div className="px-5 pb-5">
                <table className="w-full text-sm">
                  <tbody>
                    {cat.rows.map((r, i) => (
                      <tr key={r.name} className={i > 0 ? "border-t border-border/20" : ""}>
                        <td className="py-2.5 text-muted-foreground pr-3 leading-snug">{r.name}</td>
                        <td className="py-2.5 text-right font-semibold text-cta whitespace-nowrap tabular-nums">
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