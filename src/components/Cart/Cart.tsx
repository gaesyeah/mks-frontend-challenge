import { useContext } from "react";
import { CartContainer, CartTitle, CloseCartIcon } from "./Style";
import CartContext, { undefinedCartContext } from "../../contexts/CartContext";

const Cart = () => {

  const { openCart, setOpenCart } = useContext(CartContext) ?? undefinedCartContext;

  return (
    <CartContainer openCart={ openCart }>
      <CartTitle>
        <p>Carrinho de Compras</p>
        <CloseCartIcon onClick={() => setOpenCart(previous => !previous)}>
          <p>X</p>
        </CloseCartIcon>
      </CartTitle>
    </CartContainer>
  );
};

export default Cart;