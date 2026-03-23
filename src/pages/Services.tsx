import {
  Wind, Wrench, Settings, Thermometer, Droplets,
  ArrowRight, Phone
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/components/useScrollReveal";

const PHONE = "+77066656662";
const WA_LINK = "https://wa.me/77066656662?text=Здравствуйте!%20У%20меня%20проблема%20с%20кондиционером.";

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
      { name: "Чистка внутреннего блока", price: "от 8 000 ₸", note: "С антибактериальной обработкой" },
      { name: "Полная чистка", price: "от 12 000 ₸", note: "Внутренний + наружный блок" },
    ],
  },
  {
    title: "Заправка фреоном",
    icon: Droplets,
    rows: [
      { name: "Фреон R410A", price: "от 7 000 ₸", note: "За 100 грамм" },
      { name: "Фреон R32", price: "от 8 000 ₸", note: "За 100 грамм" },
    ],
  },
  {
    title: "Ремонт кондиционера",
    icon: Wrench,
    rows: [
      { name: "Ремонт платы управления", price: "от 12 000 ₸", note: "С заменой компонентов" },
      { name: "Замена компрессора", price: "от 35 000 ₸", note: "С заправкой фреона" },
      { name: "Замена вентилятора (внутр.)", price: "от 15 000 ₸", note: "С гарантией" },
      { name: "Замена вентилятора (наруж.)", price: "от 18 000 ₸", note: "С гарантией" },
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
    <div className="py-16 md:py-24 bg-secondary/30" ref={ref} style={{ opacity: 0 }}>
      <div className="container px-4 md:px-8">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Услуги и цены
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-balance mb-4">
          Все услуги с&nbsp;прозрачными ценами
        </h1>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-14 text-base md:text-lg leading-relaxed">
          Точная стоимость зависит от модели и&nbsp;сложности. Диагностика бесплатна при&nbsp;заказе ремонта.
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-card rounded-2xl border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-4 p-6 pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <cat.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h2 className="text-xl font-bold">{cat.title}</h2>
              </div>

              {/* Rows */}
              <div className="px-6 pb-6 flex-1">
                <div className="space-y-0 divide-y divide-border/30">
                  {cat.rows.map((r) => (
                    <div key={r.name} className="py-3.5 flex flex-col gap-1">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-sm md:text-[0.938rem] font-medium text-foreground leading-snug">
                          {r.name}
                        </span>
                        <span className="text-base md:text-lg font-bold text-cta whitespace-nowrap tabular-nums shrink-0">
                          {r.price}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground leading-snug">
                        {r.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground text-base">
            Нужна точная стоимость? Свяжитесь с&nbsp;нами.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="cta" size="xl">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-5" />
                Позвонить
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="!size-5" />
                Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
