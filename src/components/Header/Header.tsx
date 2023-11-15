import { useContext } from "react";
import { CartButtonContainer, CartIcon, HeaderContainer, LogoContainer } from "./style";
import CartContext, { undefinedCartContext } from "../../contexts/CartContext";

const Header = () => {

  const { setOpenCart, cartProducts } = useContext(CartContext) ?? undefinedCartContext;

  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>MKS <span>Sistemas</span></h1>
      </LogoContainer>

      <CartButtonContainer onClick={() => setOpenCart(previous => !previous)}>
        <CartIcon />
        <p>{cartProducts.products.length}</p>
      </CartButtonContainer>
    </HeaderContainer>
  );
};

export default Header;