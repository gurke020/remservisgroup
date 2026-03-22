import {
  Wind, Wrench, Settings, Thermometer, Droplets,
  Fan, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/components/useScrollReveal";

const categories = [
  {
    title: "Чистка кондиционера",
    icon: Wind,
    rows: [
      { name: "Чистка внутреннего блока с антибактериальной обработкой", price: "8 000 ₸" },
      { name: "Чистка наружного блока (мойка керхером)", price: "8 000 ₸" },
      { name: "Глубокая разборная чистка с парогенератором", price: "15 000 ₸" },
      { name: "Чистка дренажной системы", price: "5 000 ₸" },
    ],
  },
  {
    title: "Ремонт кондиционера",
    icon: Wrench,
    rows: [
      { name: "Диагностика неисправности", price: "от 3 000 ₸" },
      { name: "Замена компрессора", price: "от 35 000 ₸" },
      { name: "Ремонт и замена платы управления", price: "от 15 000 ₸" },
      { name: "Замена вентилятора внутреннего / наружного блока", price: "от 10 000 ₸" },
      { name: "Устранение утечки фреона, пайка трассы", price: "от 8 000 ₸" },
      { name: "Замена датчиков температуры", price: "уточняйте" },
    ],
  },
  {
    title: "Установка кондиционера",
    icon: Settings,
    rows: [
      { name: "Стандартный монтаж сплит-системы (до 3 м трассы)", price: "от 15 000 ₸" },
      { name: "Монтаж с прокладкой трассы в штробе", price: "от 25 000 ₸" },
      { name: "Установка мульти-сплит систем", price: "уточняйте" },
      { name: "Демонтаж и перенос кондиционера", price: "от 8 000 ₸" },
    ],
  },
  {
    title: "Диагностика",
    icon: Thermometer,
    rows: [
      { name: "Полная диагностика сплит-системы", price: "от 3 000 ₸" },
      { name: "Проверка давления в контуре", price: "входит" },
      { name: "Проверка электрических цепей и компонентов", price: "входит" },
      { name: "Тестирование работы всех режимов", price: "входит" },
    ],
  },
  {
    title: "Заправка фреоном",
    icon: Droplets,
    rows: [
      { name: "Дозаправка хладагентом R-410A / R-32", price: "от 6 000 ₸" },
      { name: "Полная замена фреона с вакуумированием", price: "от 12 000 ₸" },
      { name: "Проверка герметичности перед заправкой", price: "входит" },
    ],
  },
  {
    title: "Дополнительные услуги",
    icon: Fan,
    rows: [
      { name: "Замена пульта управления (оригинал / универсал)", price: "уточняйте" },
      { name: "Прокладка дополнительной трассы (за 1 п.м.)", price: "уточняйте" },
      { name: "Установка защитного козырька на наружный блок", price: "уточняйте" },
      { name: "Подключение к Wi-Fi модулю управления", price: "уточняйте" },
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