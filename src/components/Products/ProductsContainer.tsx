import { StyledProductsContainer } from "./style";
import ProductComponent from "./Product/Product";
import { fetchData } from "../../api/api";

const ProductsContainer = () => {
  const { data, isError, isLoading } = fetchData(
    "products?page=1&rows=50&sortBy=id&orderBy=ASC"
  );

  if (isError)
    return (
      <StyledProductsContainer>
        <h5>Houve um erro ao dar fetch nos produtos</h5>
      </StyledProductsContainer>
    );

  if (data?.count === 0)
    return (
      <StyledProductsContainer>
        <h5>Não há nenhum produto cadastrado em nosso site no momento</h5>
      </StyledProductsContainer>
    );

  return (
    <StyledProductsContainer>
      {data?.products.map((product) => (
        <ProductComponent
          key={product.id}
          product={product}
          isLoading={isLoading}
        />
      ))}
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
