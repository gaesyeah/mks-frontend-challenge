import { ReactNode, createContext, useState } from 'react';

type CartState = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartState | undefined>(undefined);
export default CartContext;

const defaultOpenCartValue: boolean = false;
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  
  const [openCart, setOpenCart] = useState<boolean>(defaultOpenCartValue);
  
  return (
    <CartContext.Provider value={{ openCart, setOpenCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const undefinedCartContext = { openCart: defaultOpenCartValue, setOpenCart: () => {} };
