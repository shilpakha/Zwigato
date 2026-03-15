import { Plus, Minus } from "lucide-react";

import vegSandwich from "@/assets/veg-sandwich.jpg";
import grilledSandwich from "@/assets/grilled-sandwich.jpg";
import vegBurger from "@/assets/veg-burger.jpg";
import cheeseBurger from "@/assets/cheese-burger.jpg";
import poha from "@/assets/poha.jpg";
import idly from "@/assets/idly.jpg";
import dosa from "@/assets/dosa.jpg";
import masalaDosa from "@/assets/masala-dosa.jpg";
import uttapam from "@/assets/uttapam.jpg";
import upma from "@/assets/upma.jpg";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const menuItems = [
  { name: "Veg Sandwich", price: 100, image: vegSandwich },
  { name: "Grilled Sandwich", price: 100, image: grilledSandwich },
  { name: "Veg Burger", price: 100, image: vegBurger },
  { name: "Cheese Burger", price: 100, image: cheeseBurger },
  { name: "Poha", price: 100, image: poha },
  { name: "Idly", price: 100, image: idly },
  { name: "Dosa", price: 100, image: dosa },
  { name: "Masala Dosa", price: 100, image: masalaDosa },
  { name: "Uttapam", price: 100, image: uttapam },
  { name: "Upma", price: 100, image: upma },
];

interface MenuSectionProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const MenuSection = ({ cart, setCart }: MenuSectionProps) => {
  const getItemQuantity = (name: string) => {
    return cart.find((item) => item.name === name)?.quantity || 0;
  };

  const addItem = (item: (typeof menuItems)[0]) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
        return prev.map((c) =>
          c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (name: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === name);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((c) => c.name !== name);
      }
      return prev.map((c) =>
        c.name === name ? { ...c, quantity: c.quantity - 1 } : c
      );
    });
  };

  return (
    <section id="menu" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-secondary">
            Our Menu
          </h2>
          <p className="text-muted-foreground mt-3 font-body text-lg">
            Everything at a flat <span className="text-primary font-semibold">₹100</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {menuItems.map((item) => {
            const qty = getItemQuantity(item.name);
            return (
              <div
                key={item.name}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h3 className="font-display font-bold text-sm text-card-foreground truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold font-display">
                      ₹{item.price}
                    </span>
                    {qty === 0 ? (
                      <button
                        onClick={() => addItem(item)}
                        className="bg-primary text-primary-foreground rounded-full p-1.5 hover:scale-90 active:scale-75 transition-transform"
                        aria-label={`Add ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeItem(item.name)}
                          className="bg-secondary text-secondary-foreground rounded-full p-1 hover:scale-90 active:scale-75 transition-transform"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-bold text-sm font-display text-card-foreground">
                          {qty}
                        </span>
                        <button
                          onClick={() => addItem(item)}
                          className="bg-primary text-primary-foreground rounded-full p-1 hover:scale-90 active:scale-75 transition-transform"
                          aria-label={`Add more ${item.name}`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
