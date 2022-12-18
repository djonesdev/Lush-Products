import React from "react";
import { render, screen } from "@testing-library/react";

import ItemOverview from ".";
import mockProductsResponse from "utils/testUtils/mockProductsResponse";

const mockAddToCart = jest.fn();
jest.mock("utils/useCart", () => {
  return jest.fn(() => ({
    addToCart: mockAddToCart,
  }));
});

describe("ItemOverview", () => {
  beforeEach(() => {
    render(<ItemOverview product={mockProductsResponse.products.edges[0]} />);
  });

  it("Should render the name of the product", () => {
    expect(screen.getByText("Whoosh")).toBeInTheDocument();
  });

  it("Should render a button list", () => {
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });

  it('Should call addToCart when clicking "Add to cart"', () => {
    const addToCartButton = screen.getByText("Add to cart");
    expect(addToCartButton).toBeInTheDocument();

    addToCartButton.click();

    expect(mockAddToCart).toHaveBeenCalled();
  });
});
