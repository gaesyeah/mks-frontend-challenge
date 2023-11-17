import { fireEvent, screen } from "@testing-library/react";
import * as api from "../../../api/api";
import Cart from "../Cart";
import { generateProduct } from "../../../test/factories/product.factory";
import ProductsContainer from "../../Products/ProductsContainer";
import renderComponent from "../../../test/renderComponent";
import Header from "../../Header/Header";

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
      data: { products: [product1, product2], count: 2 },
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
    expect(screen.getByTestId("finalPrice")).toContainHTML(
      `<p data-testid="finalPrice">R$${
        Number(product1.price) + Number(product2.price)
      }</p>`
    );
  });
  it('should be no products, value 0 and "CARRINHO VAZIO" when the user clicks on "FINALIZAR COMPRA"', () => {
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
    expect(screen.getByTestId("finalPrice")).toHaveTextContent("R$0");
    expect(screen.getByText("CARRINHO VAZIO")).toBeInTheDocument();
    expect(
      screen.queryByTestId(`cartProduct ${product1.id}`)
    ).not.toBeInTheDocument();
  });
  it("should show the Cart when the user clicks on the cart Icon", () => {
    renderComponent(
      <>
        <Header />
        <Cart />
      </>
    );

    fireEvent.click(screen.getByTestId("openCart"));
    expect(screen.getByTestId("cartContainer")).toHaveStyle({ right: "0px" });
  });
  it("should hide the Cart when the user clicks on X icon", () => {
    renderComponent(
      <>
        <Header />
        <Cart />
      </>
    );

    fireEvent.click(screen.getByTestId("openCart"));
    fireEvent.click(screen.getByTestId("closeCart"));
    expect(screen.getByTestId("cartContainer")).toHaveStyle({
      right: "-486px",
    });
  });
});
