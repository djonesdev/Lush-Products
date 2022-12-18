import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Image from "./";

describe("Image", () => {

  it("Should render with the provided image", async () => {
    render(
      <Image
        dataTestId="TEST_ID"
        src="https://twstg2.eu.saleor.cloud/media/123456"
        alt="12346"
        productName="Whooosh"
      />
    );
    const imageSrc = /image\?url=https%3A%2F%2Ftwstg2.eu.saleor.cloud%2Fmedia%2F123456/

    const testImage = screen.getByTestId("TEST_ID");

    await waitFor(() => {
      expect(testImage).toHaveAttribute(
        "src",
        expect.stringMatching(imageSrc)
      );
    });
  });

  it("Should render fallbackimage if no url is provided", async () => {
    render(
      <Image
        dataTestId="TEST_ID"
        src=""
        alt="12346"
        productName="Whooosh"
      />
    );
    const placeholderImageSrc = /image\?url=%2Fimg.jpg/

    const testImage = screen.getByTestId("TEST_ID");

    await waitFor(() => {
      expect(testImage).toHaveAttribute(
        "src",
        expect.stringMatching(placeholderImageSrc)
      );
    });
  });
});
