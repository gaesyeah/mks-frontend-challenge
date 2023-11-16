import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Products } from "../vite-env";

type CartOpenedState = {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};
type CartProducts = Pick<Products, "products">;
type CartState = {
  cartProducts: CartProducts;
  setCartProducts: Dispatch<SetStateAction<CartProducts>>;
};
type CartStateContext = CartOpenedState & CartState;

const CartContext = createContext<CartStateContext | undefined>(undefined);
export default CartContext;

const defaultOpenCartValue: boolean = false;
const defaultCartProducts: CartProducts = { products: [] };
export const CartProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [openCart, setOpenCart] = useState<boolean>(defaultOpenCartValue);
  const [cartProducts, setCartProducts] = useState<CartProducts>({
    ...defaultCartProducts,
  });

  return (
    <CartContext.Provider
      value={{ openCart, setOpenCart, cartProducts, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const undefinedCartContext: CartStateContext = {
  openCart: defaultOpenCartValue,
  setOpenCart: () => {},
  cartProducts: { ...defaultCartProducts },
  setCartProducts: () => {},
};
