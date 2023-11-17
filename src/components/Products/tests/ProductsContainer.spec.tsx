import { screen } from "@testing-library/react";
import ProductsContainer from "../ProductsContainer";
import * as api from "../../../api/api";
import { generateProduct } from "../../../test/factories/product.factory";
import renderComponent from "../../../test/renderComponent";

jest.mock("../../../api/api", () => ({
  fetchData: jest.fn(),
}));
const renderDataSpy = jest.spyOn(api, "fetchData");

describe("ProductsContainer", () => {
  it('should render "Houve um erro ao dar fetch nos produtos" when fetchData returns an error', () => {
    renderDataSpy.mockReturnValue({
      isError: true,
      isLoading: false,
      data: { products: [generateProduct()], count: 1 },
    });
    renderComponent(<ProductsContainer />);
    expect(
      screen.getByText("Houve um erro ao dar fetch nos produtos")
    ).toBeInTheDocument();
  });
  it('should render "Não há nenhum produto cadastrado em nosso site no momento" when there is no products on the API', () => {
    renderDataSpy.mockReturnValue({
      isError: false,
      isLoading: false,
      data: { products: [], count: 0 },
    });
    renderComponent(<ProductsContainer />);
    expect(
      screen.getByText(
        "Não há nenhum produto cadastrado em nosso site no momento"
      )
    ).toBeInTheDocument();
  });
  it("should render the product when everything is ok", () => {
    const product = generateProduct();
    renderDataSpy.mockReturnValue({
      isError: false,
      isLoading: false,
      data: { products: [product], count: 1 },
    });
    renderComponent(<ProductsContainer />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText("COMPRAR")).toBeInTheDocument();
  });
});
