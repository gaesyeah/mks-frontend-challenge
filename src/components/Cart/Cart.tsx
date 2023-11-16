import { useContext, useState } from "react";
import {
  CartContainer,
  CartProductsContainer,
  CartTitle,
  CloseCartIcon,
  PurchaseInfoContainer,
  RelativePosition,
} from "./style";
import CartContext, { undefinedCartContext } from "../../contexts/CartContext";
import CartProduct from "./CartProduct/CartProduct";

const Cart = () => {
  const { openCart, setOpenCart, cartProducts, setCartProducts } =
    useContext(CartContext) ?? undefinedCartContext;

  const [finalPrice, setFinalPrice] = useState<number>(0);

  const buyCartProducts = () => {
    setCartProducts({ products: [] });
    setFinalPrice(0);
  };
  const notEmptyCart = cartProducts.products.length > 0;

  return (
    <CartContainer openCart={openCart}>
      <RelativePosition>
        <CartTitle>
          <h3>Carrinho de Compras</h3>
          <CloseCartIcon onClick={() => setOpenCart((previous) => !previous)}>
            <p>x</p>
          </CloseCartIcon>
        </CartTitle>
        <CartProductsContainer>
          <ul>
            {cartProducts.products.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                setFinalPrice={setFinalPrice}
              />
            ))}
          </ul>
        </CartProductsContainer>
        <PurchaseInfoContainer notEmptyCart={notEmptyCart}>
          <div>
            <p>Total:</p>
            <p>R${finalPrice}</p>
          </div>
          <button onClick={() => notEmptyCart && buyCartProducts()}>
            <p>{notEmptyCart ? "FINALIZAR COMPRA" : "CARRINHO VAZIO"}</p>
          </button>
        </PurchaseInfoContainer>
      </RelativePosition>
    </CartContainer>
  );
};

export default Cart;
