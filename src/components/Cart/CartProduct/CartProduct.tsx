import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FlexContainer,
  Price,
  Quantity,
  QuantityContainer,
  RemoveFromCartIcon,
  StyledCartProduct,
  View,
} from "./style";
import { Product } from "../../../vite-env";
import CartContext, {
  undefinedCartContext,
} from "../../../contexts/CartContext";

const CartProductComponent: FC<{
  product: Product;
  setFinalPrice: Dispatch<SetStateAction<number>>;
}> = ({ product, setFinalPrice }) => {
  const { name, price, photo, id } = product;

  const { setCartProducts } = useContext(CartContext) ?? undefinedCartContext;

  const [qtd, setQtd] = useState<number>(1);
  const parsePrice = parseInt(price.replace(".00", ""));
  const finalPrice = parsePrice * qtd;
  const updatePrice = (type: string) => {
    setQtd((previous) => (type === "sum" ? previous + 1 : previous - 1));
    setFinalPrice((previous) =>
      type === "sum" ? previous + parsePrice : previous - parsePrice
    );
  };

  const initialized = useRef<boolean>(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    setFinalPrice((previous) => previous + parsePrice);
  }, []);

  const removeProductFromCart = () => {
    setCartProducts((previous) => ({
      products: previous.products.filter((product) => product.id! !== id),
    }));
    setFinalPrice((previous) => previous - finalPrice);
  };

  return (
    <StyledCartProduct>
      <View>
        <div>
          <img src={photo} alt={`product ${id}`}></img>
        </div>
        <p>{name}</p>
      </View>
      <FlexContainer>
        <QuantityContainer>
          <Quantity>Qtd:</Quantity>
          <div>
            <button onClick={() => qtd > 1 && updatePrice("sub")}>
              <p>-</p>
            </button>
            <p>{qtd}</p>
            <button onClick={() => updatePrice("sum")}>
              <p>+</p>
            </button>
          </div>
        </QuantityContainer>
        <Price>R${finalPrice}</Price>
        <RemoveFromCartIcon onClick={removeProductFromCart}>
          <p>x</p>
        </RemoveFromCartIcon>
      </FlexContainer>
    </StyledCartProduct>
  );
};

export default CartProductComponent;
