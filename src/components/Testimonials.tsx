import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The Masala Dosa was absolutely divine! Arrived steaming hot in just 25 minutes. Can't believe this quality at ₹100!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    text: "Best cheese burger I've had in the city. Zwigato's speed is unmatched — ordered at 8 PM, eating by 8:22 PM!",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    text: "Their Idly and Poha are my go-to breakfast. Fresh, tasty, and always on time. Truly a lifesaver on busy mornings.",
    rating: 5,
  },
  {
    name: "Karthik Nair",
    text: "The grilled sandwich is loaded with cheese and veggies. My whole family orders from Zwigato every weekend now!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    text: "Uttapam was crispy and delicious. The flat ₹100 pricing makes it so easy to order without overthinking. Love it!",
    rating: 5,
  },
  {
    name: "Arjun Das",
    text: "Veg burger was juicy and fresh. The 30-minute delivery is legit — they even beat their own promise sometimes!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-secondary">
            What Our Foodies Say
          </h2>
          <p className="text-muted-foreground mt-3 font-body text-lg">
            Verified eaters, real reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 shadow-md border border-border space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground font-body text-sm leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Eater ✓</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
