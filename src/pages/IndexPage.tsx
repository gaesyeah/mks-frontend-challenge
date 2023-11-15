import { Index } from "./style";
import Cart from "../components/Cart/Cart";
import ProductsContainer from "../components/Products/ProductsContainer";

const IndexPage = () => {

  return (
    <Index>
      <ProductsContainer />
      <Cart/>
    </Index>
  );
};

export default IndexPage;