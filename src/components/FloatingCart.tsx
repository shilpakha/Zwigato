import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { CartItem } from "./MenuSection";

interface FloatingCartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const FloatingCart = ({ cart, setCart }: FloatingCartProps) => {
  const [expanded, setExpanded] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (totalItems === 0) return null;

  const handlePlaceOrder = () => {
    toast.success("Order placed! Your food will arrive in 30 minutes 🎉", {
      duration: 5000,
    });
    setCart([]);
    setExpanded(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Expanded Cart */}
      {expanded && (
        <div className="bg-card border-t border-border shadow-2xl mx-auto max-w-lg rounded-t-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-card-foreground">Your Order</h3>
            <button onClick={() => setExpanded(false)} className="text-muted-foreground hover:text-card-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm font-body">
                <span className="text-card-foreground">{item.name} × {item.quantity}</span>
                <span className="font-semibold text-card-foreground">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 flex items-center justify-between font-display font-bold text-lg">
            <span className="text-card-foreground">Total</span>
            <span className="text-primary">₹{totalPrice}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-primary text-primary-foreground font-display font-bold py-3 rounded-full hover:scale-[0.98] active:scale-95 transition-transform text-lg"
          >
            Place Order 🚀
          </button>
        </div>
      )}

      {/* Bottom Bar */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="w-full bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between font-display font-bold text-lg shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5" />
            <span>{totalItems} {totalItems === 1 ? "item" : "items"}</span>
          </div>
          <span>₹{totalPrice} — View Cart</span>
        </button>
      )}
    </div>
  );
};

export default FloatingCart;
