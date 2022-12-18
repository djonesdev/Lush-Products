import React from "react";
import { render, screen } from "@testing-library/react";

import mockCategories from "utils/mocks/mockCategories";
import CategoryList from ".";

const mockFunction = jest.fn();
const mockGetMoreCategories = jest.fn()

describe("CategoryList", () => {
  beforeEach(() => {
    render(
      <CategoryList
        categories={mockCategories.categories}
        onClick={mockFunction}
        activeCategories={[]}
        getCategories={mockGetMoreCategories}
      />
    );
  });

  it("Should render the name of the category", () => {
    const testCategory = screen.getByText("Face");
    expect(testCategory).toBeInTheDocument();
  });

  it("Should call get more categories when click more button", () => {
    const moreButton = screen.getByText("More...");
    moreButton.click()
    expect(mockGetMoreCategories).toHaveBeenCalled();
  });
});
