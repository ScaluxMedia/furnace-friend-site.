import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hvac.jpg";

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="HVAC technician servicing furnace" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-2 text-primary font-body font-medium text-sm tracking-wide uppercase">
          <Clock className="w-4 h-4" />
          <span>24/7 Emergency Service Available</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1]">
          Your Comfort Is Our Business
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-lg">
          Richmond Hill's trusted heating & air conditioning experts. Serving the GTA for over 20 years with honest, reliable service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" className="text-lg px-8 py-6 font-body font-bold" asChild>
            <a href="tel:9058833545">
              <Phone className="w-5 h-5 mr-2" />
              (905) 883-3545
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-body font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
