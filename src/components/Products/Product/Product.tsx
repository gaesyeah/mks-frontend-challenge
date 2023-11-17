import { FC, ReactNode, useContext } from "react";
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
  const returnTag = ({
    tag,
    width,
    height,
  }: {
    tag: ReactNode;
    width: number;
    height: number;
  }): ReactNode => {
    if (isLoading)
      return <Skeleton variant="rounded" width={width} height={height} />;
    return tag;
  };

  return (
    <StyledProduct>
      <ImageContainer>
        {returnTag({
          tag: <img src={photo} alt={`product ${id}`}></img>,
          width: 218,
          height: 150,
        })}
      </ImageContainer>
      <ProductInfoContainer>
        <Info>
          {returnTag({
            tag: <p>{name}</p>,
            width: 100,
            height: 26,
          })}
          {returnTag({
            tag: (
              <div>
                <p>R${price.replace(".00", "")}</p>
              </div>
            ),
            width: 67,
            height: 26,
          })}
        </Info>
        {returnTag({
          tag: <Description>{description}</Description>,
          width: 194,
          height: 38,
        })}
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
