import { fireEvent, screen } from "@testing-library/react";
import * as api from "../../../../api/api";
import Cart from "../../Cart";
import { generateProduct } from "../../../../test/factories/product.factory";
import ProductsContainer from "../../../Products/ProductsContainer";
import renderComponent from "../../../../test/renderComponent";

jest.mock("../../../../api/api", () => ({
  fetchData: jest.fn(),
}));
const renderDataSpy = jest.spyOn(api, "fetchData");

describe("CartProduct", () => {
  it('should render the CartProducts when the user clicks on "COMPRAR"', () => {
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
    expect(
      screen.getByTestId(`cartProduct ${product1.id}`)
    ).toBeInTheDocument();
  });
  it("should not decrease the qtd and values when the user try to decrease the qtd === 1", () => {
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

    //decrease product two times
    fireEvent.doubleClick(screen.getByTestId(`decrease ${product1.id}`));

    expect(screen.getByTestId(`qtd ${1}`)).toBeInTheDocument();
    //price of the sum of product 1
    expect(screen.getByTestId(`price ${product1.id}`)).toHaveTextContent(
      `R$${product1.price.toString()}`
    );
    //final price
    expect(screen.getByTestId("finalPrice")).toHaveTextContent(
      `R$${product1.price.toString()}`
    );
  });
  it('should increase and decrease the qtd, and update the values correctly when the user changes it"', () => {
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
    //increase product 1 two times, and decrease one time()
    fireEvent.click(screen.getByTestId(`increase ${product1.id}`));
    fireEvent.click(screen.getByTestId(`increase ${product1.id}`));
    fireEvent.click(screen.getByTestId(`decrease ${product1.id}`));

    expect(screen.getByTestId(`qtd ${1}`)).toBeInTheDocument();
    expect(screen.getByTestId(`qtd ${2}`)).toBeInTheDocument();

    const sumPriceProduct1 = Number(product1.price) * 2;
    const sumPriceProduct2 = Number(product2.price);
    //price of the sum of product 1
    expect(screen.getByTestId(`price ${product1.id}`)).toHaveTextContent(
      `R$${sumPriceProduct1.toString()}`
    );
    //price of the sum of product 2
    expect(screen.getByTestId(`price ${product2.id}`)).toHaveTextContent(
      `R$${sumPriceProduct2.toString()}`
    );
    //final price
    expect(screen.getByTestId("finalPrice")).toHaveTextContent(
      `R$${(sumPriceProduct1 + sumPriceProduct2).toString()}`
    );
  });
  it("should update the final price correctly and remove the product from the cart when the user remove it", () => {
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

    fireEvent.click(screen.getByTestId(`buyProduct ${product2.id}`));
    fireEvent.click(screen.getByTestId(`buyProduct ${product1.id}`));
    fireEvent.click(screen.getByTestId(`remove ${product1.id}`));
    expect(
      screen.queryByTestId(`cartProduct ${product1.id}`)
    ).not.toBeInTheDocument();
    expect(
      screen.getByTestId(`cartProduct ${product2.id}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId("finalPrice")).toHaveTextContent(
      `R$${product2.price.toString()}`
    );
  });
});
