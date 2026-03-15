import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection, { type CartItem } from "@/components/MenuSection";
import Testimonials from "@/components/Testimonials";
import FloatingCart from "@/components/FloatingCart";
import Footer from "@/components/Footer";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection cart={cart} setCart={setCart} />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
      <FloatingCart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Index;
