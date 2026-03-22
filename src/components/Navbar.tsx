import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+77086309407";
const PHONE_DISPLAY = "+7 708 630 94 07";

const links = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги и цены" },
  { to: "/contacts", label: "Контакты" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container flex items-center justify-between h-14 md:h-16 px-4 md:px-8">
        <Link to="/" className="text-lg font-bold text-foreground tracking-tight">
          Remservisgroup
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors link-underline pb-0.5 ${
                pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="cta" size="sm" className="hidden md:inline-flex">
          <a href={`tel:${PHONE}`}>
            <Phone className="!size-3.5" />
            {PHONE_DISPLAY}
          </a>
        </Button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-card px-4 pb-4 pt-2 space-y-1 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium rounded-lg px-3 transition-colors ${
                pathname === l.to
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button asChild variant="cta" size="lg" className="w-full">
              <a href={`tel:${PHONE}`}>
                <Phone className="!size-4" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
