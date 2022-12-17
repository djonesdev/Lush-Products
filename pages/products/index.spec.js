import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MockedProvider } from "@apollo/react-testing";
import React from "react";

import Home from "./index";
import { onClickTogglePage }from './handlers';
import { PRODUCT_QUERY } from "../../graphQL/queries/products";
import mockProductsResponse from "../../utils/testUtils/mockProductsResponse";

jest.mock('./handlers', () => {
    return {
      __esModule: true,
      ...jest.requireActual('./handlers'), 
      onClickTogglePage: jest.fn(() => 'MOCK_FUNCTION')
    };
  });

const mockQuery = [
  {
    request: {
      query: PRODUCT_QUERY,
      variables: {
        channel: "uk",
        first: 20,
        last: 0,
        filter: { isPublished: true },
        sortBy: { direction: "ASC", field: "RANK" },
      },
    },
    result: {
      loading: false,
      data: mockProductsResponse,
    },
  },
];

describe("Products list page", () => {
  it("Should contain items from a successful query", async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mockQuery}>
          <Home />
        </MockedProvider>
      );
    });
    expect(await screen.findByText("Whoosh")).toBeInTheDocument();
  });

  it('Should call the toggle page handler when clicking "Load next page" button', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mockQuery}>
          <Home />
        </MockedProvider>
      );
    });
    const loadNextPageButton = await screen.findByText("Load next page");
    expect(loadNextPageButton).toBeInTheDocument();

    fireEvent.click(loadNextPageButton)
    expect(onClickTogglePage).toHaveBeenCalled();
  });

  it('Should call the toggle page handler when clicking "Load previous page" button', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mockQuery}>
          <Home />
        </MockedProvider>
      );
    });
    const loadNextPageButton = await screen.findByText("Load previous page");
    expect(loadNextPageButton).toBeInTheDocument();

    fireEvent.click(loadNextPageButton)
    expect(onClickTogglePage).toHaveBeenCalled();
  });
});
