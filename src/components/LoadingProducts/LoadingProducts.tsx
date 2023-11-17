import { mockProducts } from "../../constants/mockProducts";
import ProductComponent from "../Products/Product/Product";

const LoadingProducts = () => {
  return mockProducts.map((product) => (
    <ProductComponent key={product.id} product={product} isLoading={true} />
  ));
};

export default LoadingProducts;
