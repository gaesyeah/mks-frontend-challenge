import { fireEvent, screen } from "@testing-library/react";
import { generateProduct } from "../../../../test/factories/product.factory";
import ProductComponent from "../../Product/Product";
import renderComponent from "../../../../test/renderComponent";

describe("Product", () => {
  it('should render "NO CARRINHO" on the Product button when the user clicks on "COMPRAR"', () => {
    const product = generateProduct("celular");
    renderComponent(
      <ProductComponent key={product.id} product={product} isLoading={false} />
    );
    fireEvent.click(screen.getByTestId(`buyProduct ${product.id}`));
    expect(screen.getByText("NO CARRINHO")).toBeInTheDocument();
  });
  it("should render the Skeleton/loading if while the API request doesnt end", () => {
    const product = generateProduct("celular");
    renderComponent(
      <ProductComponent key={product.id} product={product} isLoading={true} />
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
