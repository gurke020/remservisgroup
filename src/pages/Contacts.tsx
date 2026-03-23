import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send, ShieldCheck, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/components/useScrollReveal";
import { submitFormspree } from "@/lib/formspree";

const PHONE = "+77066656662";
const PHONE_DISPLAY = "+7 706 665 66 62";
const WA_LINK = `https://wa.me/77066656662?text=${encodeURIComponent("Здравствуйте! Хочу вызвать мастера по кондиционерам.")}`;

const NAME_MAX = 80;
const PHONE_MAX = 30;
const COMMENT_MAX = 500;

const ContactsPage = () => {
  const { toast } = useToast();
  const ref = useScrollReveal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string || "").trim();
    const phone = (fd.get("phone") as string || "").trim();
    if (!name || name.length > NAME_MAX) return;
    if (!phone || phone.length > PHONE_MAX) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Заявка отправлена!", description: "Перезвоним в течение 15 минут." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <div className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Контакты
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Свяжитесь с&nbsp;нами
        </h1>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border/40 shadow-[0_1px_3px_hsl(211_65%_45%/0.06)]">
            <h2 className="text-lg font-semibold mb-5">Оставить заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                required name="name" placeholder="Ваше имя"
                maxLength={NAME_MAX} autoComplete="name"
                className="h-12 bg-secondary/50 border-border/60"
              />
              <Input
                required name="phone" type="tel" placeholder="Номер телефона"
                maxLength={PHONE_MAX} autoComplete="tel"
                className="h-12 bg-secondary/50 border-border/60"
              />
              <Textarea
                name="comment" placeholder="Опишите проблему (необязательно)"
                maxLength={COMMENT_MAX} rows={3}
                className="bg-secondary/50 border-border/60 resize-none"
              />
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                <Send className="!size-4" />
                {loading ? "Отправляем..." : "Вызвать мастера"}
              </Button>
              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                Бесплатная консультация · Без обязательств
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Телефон</p>
              <a
                href={`tel:${PHONE}`}
                className="text-2xl font-bold hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">WhatsApp</p>
              <Button asChild variant="whatsapp" size="lg">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="!size-5" />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>

            <div className="space-y-3 pt-2 border-t border-border/50">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Режим работы</p>
                  <p className="text-sm text-muted-foreground">Круглосуточно, без выходных</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Выезд</p>
                  <p className="text-sm text-muted-foreground">По всему городу в день обращения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
