import { render, RenderResult, screen } from "@testing-library/react";
import ProductsContainer from "../ProductsContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import * as api from "../../../api/api";
import { generateProduct } from "../../../test/factories/product.factory";

jest.mock("../../../api/api", () => ({
  fetchData: jest.fn(),
}));
const renderDataSpy = jest.spyOn(api, "fetchData");

const renderComponent = (children: ReactNode): RenderResult => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

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
    const productName = "celular";
    renderDataSpy.mockReturnValue({
      isError: false,
      isLoading: false,
      data: { products: [generateProduct(productName)], count: 1 },
    });
    renderComponent(<ProductsContainer />);
    expect(screen.getByText(productName)).toBeInTheDocument();
  });
});
