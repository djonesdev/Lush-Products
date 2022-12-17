import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    it("Should allow the user to change the main display image", async () => {
      const initialMainImageSrc = /image\?url=https%3A%2F%2Ftwstg2.eu.saleor.cloud%2Fmedia%2Fproducts%2Fwhoosh_shower_jelly_2020.png/ig
      const subImageSrc =/image\?url=https%3A%2F%2Ftwstg2.eu.saleor.cloud%2Fmedia%2Fproducts%2Fhero_whoosh_shower_jelly_sp_part_4.jpg/ig

      const mainDisplayImage = screen.getByTestId("main-product-image");
      const subImage = screen.getByTestId("sub-image-1");

      await waitFor(() => {
        expect(mainDisplayImage).toHaveAttribute("src", expect.stringMatching(initialMainImageSrc));
        expect(subImage).toHaveAttribute("src", expect.stringMatching(subImageSrc));
      });

      fireEvent.click(subImage);

      await waitFor(() => {
        expect(mainDisplayImage).toHaveAttribute("src", expect.stringMatching(subImageSrc));
      });
    });
  });
});
