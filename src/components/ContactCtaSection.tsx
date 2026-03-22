import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "./useScrollReveal";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 94 07";
const WA_LINK = `https://wa.me/77086309407?text=${encodeURIComponent("Здравствуйте! Хочу вызвать мастера по кондиционерам.")}`;

const NAME_MAX = 80;
const PHONE_MAX = 30;
const COMMENT_MAX = 500;

const ContactCtaSection = () => {
  const { toast } = useToast();
  const headRef = useScrollReveal("up");
  const formRef = useScrollReveal("scale");
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
    <section id="contact" className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, hsl(211 65% 45%) 0%, hsl(205 72% 38%) 50%, hsl(199 80% 42%) 100%)" }}
      />
      <div className="absolute top-[-30%] right-[-15%] w-[50vw] h-[50vw] rounded-full opacity-[0.06] bg-white animate-float" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[30vw] h-[30vw] rounded-full opacity-[0.04] bg-white animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 py-16 md:py-24 px-4 md:px-8">
        <div ref={headRef} style={{ opacity: 0 }} className="text-center mb-10 max-w-lg mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance leading-tight">
            Не&nbsp;терпите жару — оставьте&nbsp;заявку&nbsp;сейчас
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Заполните форму — перезвоним в&nbsp;течение 15&nbsp;минут и&nbsp;согласуем визит мастера.
          </p>
        </div>

        <div ref={formRef} style={{ opacity: 0 }} className="max-w-md mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_hsl(211_65%_20%/0.2)] border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input required name="name" placeholder="Ваше имя" maxLength={NAME_MAX} autoComplete="name"
              className="h-12 bg-secondary/50 border-border/60 placeholder:text-muted-foreground/60" />
            <Input required name="phone" type="tel" placeholder="Номер телефона" maxLength={PHONE_MAX} autoComplete="tel"
              className="h-12 bg-secondary/50 border-border/60 placeholder:text-muted-foreground/60" />
            <Textarea name="comment" placeholder="Что случилось с кондиционером? (необязательно)" maxLength={COMMENT_MAX} rows={3}
              className="bg-secondary/50 border-border/60 resize-none placeholder:text-muted-foreground/60" />

            <Button type="submit" variant="cta" size="xl" className="w-full" disabled={loading}>
              <Send className="!size-4" />
              {loading ? "Отправляем..." : "Вызвать мастера"}
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground text-center">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              Бесплатная консультация · Без&nbsp;обязательств
            </p>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-border/60" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">или</span>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" size="lg" className="flex-1">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-4" />
                {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="flex-1">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="!size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
