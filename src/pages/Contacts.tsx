import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/components/useScrollReveal";

const PHONE = "+77066656662";
const PHONE_DISPLAY = "+7 706 665 66 62";
const WA_LINK = "https://wa.me/77066656662?text=Здравствуйте!%20У%20меня%20проблема%20с%20кондиционером.";

const ContactsPage = () => {
  const ref = useScrollReveal();

  return (
    <div className="section-padding" ref={ref} style={{ opacity: 0 }}>
      <div className="container">
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Контакты
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-balance mb-12">
          Свяжитесь с&nbsp;нами
        </h1>

        <div className="max-w-md mx-auto space-y-6">
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
  );
};

export default ContactsPage;
