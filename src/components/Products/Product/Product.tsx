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
import { Skeleton } from "@mui/material";

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

  return (
    <StyledProduct>
      <ImageContainer>
        {isLoading ? (
          <Skeleton
            data-testid="loading"
            variant="rounded"
            width={218}
            height={150}
          />
        ) : (
          <img src={photo} alt={`product ${id}`}></img>
        )}
      </ImageContainer>
      <ProductInfoContainer>
        <Info>
          {isLoading ? (
            <Skeleton variant="rounded" width={100} height={26} />
          ) : (
            <p>{name}</p>
          )}

          {isLoading ? (
            <Skeleton variant="rounded" width={67} height={26} />
          ) : (
            <div>
              <p>R${price.replace(".00", "")}</p>
            </div>
          )}
        </Info>
        {isLoading ? (
          <Skeleton variant="rounded" width={194} height={38} />
        ) : (
          <Description>{description}</Description>
        )}
        <button
          data-testid={`buyProduct ${id}`}
          disabled={isLoading || onCart}
          onClick={addToCart}
        >
          <p>
            {isLoading ? "CARREGANDO..." : onCart ? "NO CARRINHO" : "COMPRAR"}
          </p>
        </button>
      </ProductInfoContainer>
    </StyledProduct>
  );
};

export default ProductComponent;
