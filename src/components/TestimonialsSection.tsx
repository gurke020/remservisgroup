import { Star } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    name: "Асель М.",
    text: "Кондей начал капать прямо на ламинат, я уже думала всё — конец ему. Ребята приехали, поменяли дренаж за полчаса. Уже месяц — сухо. Спасибо огромное!",
    rating: 5,
  },
  {
    name: "Тимур Б.",
    text: "Долго искал кого вызвать — все говорили «завтра». Эти приехали в тот же вечер. Почистили оба блока, показали фото до/после. Разница реально видна, дышать стало легче.",
    rating: 5,
  },
  {
    name: "Ольга Н.",
    text: "Ставили кондиционер в детскую. Мастер Ерлан всё объяснил — какой поток, куда направить, чтоб на ребёнка не дуло. Аккуратно, без пыли. Очень довольна.",
    rating: 5,
  },
  {
    name: "Руслан К.",
    text: "Кондиционер не включался вообще. Думал, придётся новый покупать. Оказалось — сгорел конденсатор, заменили за 15 минут. Сэкономили мне кучу денег, честные ребята.",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
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
