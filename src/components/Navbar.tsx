import { UtensilsCrossed } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-display font-extrabold text-xl text-secondary">
            Zwigato
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a>
        </div>
        <a
          href="#menu"
          className="bg-primary text-primary-foreground font-display font-bold text-sm px-5 py-2 rounded-full hover:scale-95 active:scale-90 transition-transform"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
