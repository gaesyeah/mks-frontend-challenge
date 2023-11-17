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
import Skeleton from "react-loading-skeleton";

const ProductComponent: FC<{ product: Product; isLoading: boolean }> = ({
  product,
  isLoading,
}) => {
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

  return isLoading ? (
    <Skeleton />
  ) : (
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
        <button
          data-testid={`buyProduct ${id}`}
          disabled={onCart}
          onClick={addToCart}
        >
          <p>{onCart ? "NO CARRINHO" : "COMPRAR"}</p>
        </button>
      </ProductInfoContainer>
    </StyledProduct>
  );
};

export default ProductComponent;
