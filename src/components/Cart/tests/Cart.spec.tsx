import { fireEvent, screen } from "@testing-library/react";
import * as api from "../../../api/api";
import Cart from "../Cart";
import { generateProduct } from "../../../test/factories/product.factory";
import ProductsContainer from "../../Products/ProductsContainer";
import renderComponent from "../../../test/renderComponent";

jest.mock("../../../api/api", () => ({
  fetchData: jest.fn(),
}));
const renderDataSpy = jest.spyOn(api, "fetchData");

describe("CartContainer", () => {
  it('should render "CARRINHO VAZIO" when there is no products in the cart', () => {
    renderComponent(<Cart />);
    expect(screen.getByText("CARRINHO VAZIO")).toBeInTheDocument();
  });
  it('should render "FINALIZAR COMPRA" and the right value when the user clicks on "COMPRAR"', () => {
    const product1 = generateProduct();
    const product2 = generateProduct();
    renderDataSpy.mockReturnValue({
      isError: false,
      isLoading: false,
      data: { products: [product1, product2], count: 1 },
    });

    renderComponent(
      <>
        <ProductsContainer />
        <Cart />
      </>
    );

    fireEvent.click(screen.getByTestId(`buyProduct ${product1.id}`));
    fireEvent.click(screen.getByTestId(`buyProduct ${product2.id}`));
    expect(screen.getByText("FINALIZAR COMPRA")).toBeInTheDocument();
    expect(screen.getByTestId("price")).toContainHTML(
      `<p data-testid="price">R$${
        Number(product1.price) + Number(product2.price)
      }</p>`
    );

    //fazer isso nos testes de unidade do componente CartProduct
    /* expect(screen.getByTestId(`cartProduct ${product.id}`)).toBeInTheDocument(); */
  });
  it('should be no products, and value 0 and "CARRINHO VAZIO" when the user clicks on "FINALIZAR COMPRA"', () => {
    const product1 = generateProduct();
    renderDataSpy.mockReturnValue({
      isError: false,
      isLoading: false,
      data: { products: [product1], count: 1 },
    });

    renderComponent(
      <>
        <ProductsContainer />
        <Cart />
      </>
    );

    fireEvent.click(screen.getByTestId(`buyProduct ${product1.id}`));
    fireEvent.click(screen.getByText("FINALIZAR COMPRA"));
    expect(screen.getByTestId("price")).toContainHTML(
      `<p data-testid="price">R$${0}</p>`
    );
    expect(screen.getByText("CARRINHO VAZIO")).toBeInTheDocument();
    expect(
      screen.queryByTestId(`cartProduct ${product1.id}`)
    ).not.toBeInTheDocument();
  });
});
