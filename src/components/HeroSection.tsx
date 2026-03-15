import { Clock, ChevronDown } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
            <Clock className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-semibold font-body text-accent-foreground">
              30-Minute Delivery Promise
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-tight text-secondary">
            Hot & Fresh
            <br />
            in <span className="text-primary">30 Minutes</span>
          </h1>

          <p className="text-lg text-muted-foreground font-body max-w-md">
            Craving something delicious? From crispy dosas to juicy burgers — 
            we deliver it all piping hot to your doorstep.
          </p>

          <button
            onClick={scrollToMenu}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-full hover:scale-95 active:scale-90 transition-transform shadow-lg"
          >
            Order Now
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
            <img
              src={heroFood}
              alt="Delicious masala dosa from Zwigato"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-2 right-4 md:right-8 bg-accent text-accent-foreground font-display font-bold text-sm px-5 py-3 rounded-full shadow-lg">
            ₹100 Flat Price!
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
