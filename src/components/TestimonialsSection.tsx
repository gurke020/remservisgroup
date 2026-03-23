import { Star } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    name: "Алексей К.",
    text: "Вызвал мастера на чистку кондиционера — приехали через час, сделали всё быстро и аккуратно. Воздух стал свежим, как в первый день. Рекомендую!",
    rating: 5,
  },
  {
    name: "Марина С.",
    text: "Установили сплит-систему в квартире за один день. Работали чисто, всё объяснили. Гарантию дали на 5 лет — это внушает доверие.",
    rating: 5,
  },
  {
    name: "Дмитрий Р.",
    text: "Кондиционер перестал охлаждать ночью — позвонил, мастер приехал в 2 часа ночи. Оказалось, нужна заправка фреоном. Всё сделали на месте. Спасибо!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const headRef = useScrollReveal("up");
  const gridRef = useScrollReveal("scale");

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div ref={headRef} style={{ opacity: 0 }} className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Отзывы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Что говорят наши&nbsp;клиенты
          </h2>
        </div>

        <div
          ref={gridRef}
          style={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border/40 p-6 flex flex-col gap-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-cta text-cta"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                «{t.text}»
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <div className="size-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <span className="font-medium text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
