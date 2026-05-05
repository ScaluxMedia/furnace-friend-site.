const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl mb-2">Suburban Services</h3>
          <p className="font-body text-sm text-primary-foreground/60">Heating & Air Conditioning Ltd.</p>
          <p className="font-body text-sm text-primary-foreground/60 mt-2">Richmond Hill's trusted HVAC contractor since day one.</p>
        </div>
        <div>
          <h4 className="font-body font-bold text-sm mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block font-body text-sm text-primary-foreground/60 hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body font-bold text-sm mb-3">Service Area</h4>
          <p className="font-body text-sm text-primary-foreground/60">Richmond Hill · Markham · Vaughan · Thornhill · Newmarket · Aurora · Greater Toronto Area</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">© {new Date().getFullYear()} Suburban Services Heating and Air Conditioning Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
