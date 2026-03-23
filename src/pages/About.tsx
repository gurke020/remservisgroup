import { ShieldCheck, Users, Clock, Wrench, Award, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/components/useScrollReveal";

const milestones = [
  {
    year: "2015",
    icon: Wrench,
    title: "Начало пути",
    desc: "Компания Remservisgroup начала работу в Алматы — два мастера и одна цель: качественный сервис кондиционеров без переплат.",
  },
  {
    year: "2017",
    icon: Users,
    title: "Расширение команды",
    desc: "Набрали штат из 6 сертифицированных специалистов. Начали обслуживать коммерческие объекты и офисы.",
  },
  {
    year: "2019",
    icon: Award,
    title: "1 000+ довольных клиентов",
    desc: "Перешагнули отметку в тысячу выполненных заказов. Запустили гарантию до 5 лет на монтаж.",
  },
  {
    year: "2022",
    icon: TrendingUp,
    title: "Круглосуточный сервис",
    desc: "Перешли на режим 24/7 — теперь выезжаем на вызов в любое время дня и ночи, без выходных.",
  },
  {
    year: "2024",
    icon: ShieldCheck,
    title: "Сегодня",
    desc: "Команда из 12+ мастеров с опытом от 5 лет. Обслуживаем весь Алматы и пригород. Гарантия от 3 месяцев до 5 лет.",
  },
];

const stats = [
  { value: "9+", label: "лет на рынке" },
  { value: "3 000+", label: "выполненных заказов" },
  { value: "12+", label: "мастеров в команде" },
  { value: "24/7", label: "режим работы" },
];

const AboutPage = () => {
  const headRef = useScrollReveal("up");
  const statsRef = useScrollReveal("scale");

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div ref={headRef} style={{ opacity: 0 }} className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            О компании
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4 leading-tight">
            Remservisgroup — надёжный сервис кондиционеров в&nbsp;Алматы
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Мы начинали как небольшая бригада, а выросли в команду профессионалов, которой доверяют тысячи клиентов по всему городу.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{ opacity: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-xl border border-border/40 p-5 text-center hover-lift"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary tabular-nums">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-10">История компании</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-border/60" />

            <div className="space-y-8">
              {milestones.map((m, i) => {
                const ref = useScrollReveal(i % 2 === 0 ? "left" : "right");
                return (
                  <div
                    key={m.year}
                    ref={ref}
                    style={{ opacity: 0 }}
                    className="relative pl-14 md:pl-16"
                  >
                    {/* Dot */}
                    <div className="absolute left-3 md:left-4 top-1 w-4 h-4 rounded-full bg-primary border-[3px] border-card shadow-sm" />

                    <div className="bg-card rounded-xl p-5 border border-border/40 hover-lift">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-cta bg-cta/10 rounded-full px-2.5 py-0.5 tabular-nums">
                          {m.year}
                        </span>
                        <m.icon className="w-4 h-4 text-primary" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-semibold mb-1">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-16 max-w-xl mx-auto text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Наша миссия</h3>
            <p className="text-muted-foreground leading-relaxed">
              Чтобы каждый житель Алматы мог рассчитывать на быстрый, честный и качественный сервис кондиционеров — в любое время суток, без переплат.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
