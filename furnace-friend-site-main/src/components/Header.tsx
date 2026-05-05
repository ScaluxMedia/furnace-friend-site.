import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-display text-lg md:text-xl text-foreground leading-tight">
          Suburban Services<br />
          <span className="text-xs font-body text-muted-foreground tracking-wide">Heating & Air Conditioning</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
          <Button asChild>
            <a href="tel:9058833545">
              <Phone className="w-4 h-4 mr-2" />
              (905) 883-3545
            </a>
          </Button>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 font-body text-sm font-medium text-muted-foreground hover:text-foreground">{l.label}</a>
          ))}
          <div className="px-6 pt-2">
            <Button className="w-full" asChild>
              <a href="tel:9058833545">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
