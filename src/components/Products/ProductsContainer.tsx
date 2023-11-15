import { useContext } from "react";
import { useQuery } from "react-query";
import CartContext, { undefinedCartContext } from "../../contexts/CartContext";

const ProductsContainer = () => {

  const { /* cartProducts, setCartProducts */ } = useContext(CartContext) ?? undefinedCartContext;

  const { /* isLoading, error, */ data } = useQuery('repoData', () =>
    fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC')
      .then(res =>
        res.json()
      )
  );
  console.log(data);

  return (
    <>
    </>
  );
};

export default ProductsContainer;