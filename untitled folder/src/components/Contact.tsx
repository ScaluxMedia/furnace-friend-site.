import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-primary font-body font-bold text-sm uppercase tracking-widest">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl">Ready for Reliable Comfort?</h2>
          <p className="text-muted-foreground font-body text-lg max-w-md">
            Call us today for a free estimate. No hidden fees, no surprises — just honest, quality HVAC service.
          </p>
          <div className="space-y-4 pt-4">
            {[
              { icon: Phone, label: "(905) 883-3545", href: "tel:9058833545" },
              { icon: MapPin, label: "588 Edward Ave Unit 32, Richmond Hill, ON L4C 9Y6", href: "https://maps.google.com/?q=588+Edward+Ave+Unit+32+Richmond+Hill+ON" },
              { icon: Clock, label: "Open 24 Hours — 7 Days a Week" },
              { icon: Mail, label: "info@suburbanservices.ca" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                {item.href ? (
                  <a href={item.href} className="font-body text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">{item.label}</a>
                ) : (
                  <span className="font-body text-foreground">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-8 space-y-6">
          <h3 className="text-2xl">Request a Free Quote</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring" />
            <select className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Select Service</option>
              <option>Furnace Installation</option>
              <option>Furnace Repair</option>
              <option>AC Installation</option>
              <option>AC Repair</option>
              <option>Maintenance</option>
              <option>Emergency Service</option>
            </select>
            <textarea placeholder="Tell us about your needs..." rows={3} className="w-full px-4 py-3 rounded-md border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <Button size="lg" className="w-full text-lg py-6 font-body font-bold">
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
