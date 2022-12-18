import React from "react";
import { render, screen } from "@testing-library/react";

import mockCategories from "utils/testUtils/mockCategories";
import CategoryList from "./Nav";

const mockFunction = jest.fn();

describe("CategoryList", () => {
  beforeEach(() => {
    render(
      <CategoryList
        categories={mockCategories.categories}
        onClick={mockFunction}
      />
    );
  });

  it("Should render the name of the product", () => {
    const testCategory = screen.getByText("Face");
    expect(testCategory).toBeInTheDocument();
  });
});
