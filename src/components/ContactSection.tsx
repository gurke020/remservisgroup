import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "./useScrollReveal";
import { submitFormspree } from "@/lib/formspree";

const PHONE = "+77066656662";
const PHONE_DISPLAY = "+7 706 665 66 62";
const WA_LINK = "https://wa.me/77066656662?text=Здравствуйте!%20У%20меня%20проблема%20с%20кондиционером.";

const ContactSection = () => {
  const { toast } = useToast();
  const ref = useScrollReveal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    try {
      await submitFormspree(new FormData(form));
      toast({ title: "Заявка принята!", description: "Мастер свяжется с вами в ближайшее время." });
      form.reset();
    } catch {
      toast({ title: "Ошибка при отправке", description: "Попробуйте позже.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Оставьте заявку
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              required
              name="name"
              placeholder="Ваше имя"
              className="h-12 bg-card"
            />
            <Input
              required
              name="phone"
              type="tel"
              placeholder="Номер телефона"
              className="h-12 bg-card"
            />
            <Textarea
              name="message"
              placeholder="Опишите проблему или выберите услугу"
              rows={4}
              className="bg-card resize-none"
            />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              <Send className="!size-4" />
              {loading ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>

          {/* Contact info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Позвоните нам</p>
              <a
                href={`tel:${PHONE}`}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Или напишите в WhatsApp</p>
              <Button asChild variant="whatsapp" size="lg">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="!size-5" />
                  Написать в WhatsApp
                </a>
              </Button>
            </div>

            <div className="pt-2 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Работаем ежедневно с 09:00 до 20:00
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Выезд мастера — в день обращения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
