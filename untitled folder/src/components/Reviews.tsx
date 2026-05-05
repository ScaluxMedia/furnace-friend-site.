import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Steven S.", text: "Incredible experience with the crew that recently installed our Air Conditioning Unit. Friendly, knowledgeable and professional. Would highly recommend them!", rating: 5 },
  { name: "Linda C.", text: "Shawn, Dave and Steve were really nice. Friendly and efficient. Had a new furnace put in and I am very happy with the work they did. I highly recommend this company!", rating: 5 },
  { name: "Happy Customer", text: "Great place, bought new aircon. The team was professional and got the job done quickly. Very satisfied with the installation.", rating: 4 },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < count ? "fill-primary text-primary" : "text-border"}`} />
    ))}
  </div>
);

const Reviews = () => (
  <section id="reviews" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-5xl mb-4">What Our Clients Say</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <Stars count={4} />
          <span className="text-muted-foreground font-body text-sm">4.1 out of 5 · Google Reviews</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <Card key={r.name} className="border-border/60">
            <CardContent className="pt-6 pb-6 px-6 space-y-4">
              <Stars count={r.rating} />
              <p className="text-foreground/80 font-body leading-relaxed italic">"{r.text}"</p>
              <p className="font-body font-bold text-sm text-foreground">— {r.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
