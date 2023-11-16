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

  const addToCart = () => {
    if (cartProducts.products.find((cartProduct) => cartProduct.id === id))
      return;
    setCartProducts((previous) => ({
      products: [...previous.products, { ...product }],
    }));
  };

  return (
    <StyledProduct>
      <ImageContainer>
        <img src={photo} alt={`product ${id}`}></img>
      </ImageContainer>
      <ProductInfoContainer>
        <Info>
          <p>{name}</p>
          <div>
            <p>R${price.replace(".00", "")}</p>
          </div>
        </Info>
        <Description>{description}</Description>
        <button onClick={addToCart}>
          <p>COMPRAR</p>
        </button>
      </ProductInfoContainer>
    </StyledProduct>
  );
};

export default ProductComponent;
