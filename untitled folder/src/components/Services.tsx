import { Flame, Wind, Wrench, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Flame, title: "Furnace Installation & Repair", desc: "High-efficiency furnace installation, maintenance, and emergency repairs to keep you warm all winter." },
  { icon: Wind, title: "Air Conditioning", desc: "Complete AC installation, tune-ups, and repairs. Stay cool and comfortable through every Ontario summer." },
  { icon: Wrench, title: "Maintenance Plans", desc: "Preventative maintenance programs that extend equipment life and prevent costly breakdowns." },
  { icon: ShieldCheck, title: "24/7 Emergency Service", desc: "Heating or cooling emergency? We're available around the clock, 365 days a year." },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h2 className="text-3xl md:text-5xl mb-4">Our Services</h2>
        <p className="text-muted-foreground font-body text-lg">Professional HVAC solutions for homes and businesses across Richmond Hill and the Greater Toronto Area.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg transition-shadow duration-300 border-border/60">
            <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
