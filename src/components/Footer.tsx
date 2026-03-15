import { UtensilsCrossed } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <UtensilsCrossed className="h-5 w-5" />
          <span className="font-display font-extrabold text-lg">Zwigato</span>
        </div>
        <p className="font-body text-sm opacity-70">
          Hot & Fresh in 30 Minutes — Every Single Time.
        </p>
        <p className="font-body text-xs opacity-50">
          © {new Date().getFullYear()} Zwigato. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
