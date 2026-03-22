import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 9407";
const WA_LINK = `https://wa.me/77086309407`;

const FooterSection = () => (
  <footer className="bg-foreground text-white/70 py-10 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p className="font-semibold text-white">Remservisgroup</p>

      <div className="flex items-center gap-6">
        <a href={`tel:${PHONE}`} className="hover:text-white transition-colors inline-flex items-center gap-1.5">
          <Phone className="w-4 h-4" />
          {PHONE_DISPLAY}
        </a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>

      <p className="text-white/40">© {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default FooterSection;
