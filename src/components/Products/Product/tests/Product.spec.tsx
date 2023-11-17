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
  it("should not render the Skeleton/loading if the API already responded", () => {
    const product = generateProduct("celular");
    renderComponent(
      <ProductComponent key={product.id} product={product} isLoading={false} />
    );
    expect(
      screen.queryByTestId(`loading ${product.id}`)
    ).not.toBeInTheDocument();
  });
});
