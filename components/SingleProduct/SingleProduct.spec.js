import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SingleProduct from "./SingleProduct";
import mockProductResponse from "../../utils/testUtils/mockProductResponse";

describe("SingleProduct", () => {
  beforeEach(() => {
    const { product } = mockProductResponse.data;
    render(<SingleProduct product={product} />);
  });

  it("Should render the name of the product", () => {
    expect(screen.getByText("Whoosh")).toBeInTheDocument();
  });
  it("Should render the description of the product", () => {
    expect(
      screen.getByText(
        /A boisterous bundle of fresh citrus juices and seaweed to help you bounce back to brilliant/i
      )
    ).toBeInTheDocument();
  });

  describe("Should allow user to change display image", () => {
    it("Should allow the user to change the main display image", () => {
      const initialMainImageSrc =
        "https://twstg2.eu.saleor.cloud/media/products/whoosh_shower_jelly_2020.png";
      const subImageSrc =
        "https://twstg2.eu.saleor.cloud/media/products/hero_whoosh_shower_jelly_sp_part_4.jpg";

      const mainDisplayImage = screen.getByTestId("main-product-image");
      const subImage = screen.getByTestId("sub-image-1");

      expect(mainDisplayImage).toHaveAttribute("src", initialMainImageSrc);
      expect(subImage).toHaveAttribute("src", subImageSrc);

      fireEvent.click(subImage);
      expect(mainDisplayImage).toHaveAttribute("src", subImageSrc);
    });
  });
});
