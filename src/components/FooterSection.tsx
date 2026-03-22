import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 94 07";
const WA_LINK = "https://wa.me/77086309407";

const FooterSection = () => (
  <footer className="bg-foreground py-10 px-4">
    <div className="container">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div>
          <p className="font-bold text-white text-lg mb-1">Remservisgroup</p>
          <p className="text-white/40 text-sm">Обслуживание кондиционеров с гарантией</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <Link to="/services" className="hover:text-white transition-colors">Услуги</Link>
          <Link to="/prices" className="hover:text-white transition-colors">Цены</Link>
          <Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10 text-sm text-white/50">
        <div className="flex items-center gap-5">
          <a href={`tel:${PHONE}`} className="hover:text-white transition-colors inline-flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>
        <p className="text-white/30">© {new Date().getFullYear()} Remservisgroup</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
