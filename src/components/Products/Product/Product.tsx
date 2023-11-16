import { FC, useContext } from "react";
import { Product } from "../../../vite-env";
import {
  Description,
  ImageContainer,
  Info,
  ProductInfoContainer,
  StyledProduct,
} from "./style";
import CartContext, {
  undefinedCartContext,
} from "../../../contexts/CartContext";

const ProductComponent: FC<{ product: Product }> = ({ product }) => {
  const { photo, name, id, description, price } = product;
  const { cartProducts, setCartProducts } =
    useContext(CartContext) ?? undefinedCartContext;

  const onCart = cartProducts.products.some(
    (cartProduct) => cartProduct.id === id
  );
  const addToCart = () => {
    if (onCart) return;
    setCartProducts((previous) => ({
      products: [...previous.products, { ...product }],
    }));
  };

  return (
    <StyledProduct>
      <ImageContainer>
        <img src={photo} alt={`product ${id}`}></img>
      </ImageContainer>
      <ProductInfoContainer onCart={onCart}>
        <Info>
          <p>{name}</p>
          <div>
            <p>R${price.replace(".00", "")}</p>
          </div>
        </Info>
        <Description>{description}</Description>
        <button onClick={addToCart}>
          <p>{onCart ? "NO CARRINHO" : "COMPRAR"}</p>
        </button>
      </ProductInfoContainer>
    </StyledProduct>
  );
};

export default ProductComponent;
