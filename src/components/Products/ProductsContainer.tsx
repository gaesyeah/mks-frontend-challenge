import { useQuery } from "react-query";
import { StyledProductsContainer } from "./style";
import { Products } from "../../vite-env";
import ProductComponent from "./Product/Product";

const ProductsContainer = () => {
  const { /* isLoading, error, */ data }: { data?: Products } = useQuery(
    "repoData",
    () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
      ).then((res) => res.json())
  );

  return (
    <StyledProductsContainer>
      {data?.products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
