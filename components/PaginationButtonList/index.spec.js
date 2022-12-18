import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaginationButtonList from ".";
import mockProductsResponse from "../../utils/mocks/mockProductsResponse";

const getProducts = jest.fn();
const queryParams = {
  channel: "uk",
  first: 20,
  last: 0,
  filter: {
    isPublished: true,
  },
  sortBy: { direction: "ASC", field: "RANK" },
};
const onClickTogglePage = jest.fn();
describe("ItemOverview", () => {
  //   it("Should render the previous page button if available", () => {
  //     render(
  //         <PaginationButtonList
  //           hasPreviousPage={true}
  //           hasNextPage={true}
  //           queryParams={queryParams}
  //           onClickTogglePage={onClickTogglePage}
  //           startCursor={'123445'}
  //           endCursor={'6789'}
  //           getNextPage={getProducts}
  //         />
  //       );

  //     const previousButton = screen.getByTestId("previous-pagination-button")

  //     // fireEvent.click(previousButton)
  //     expect(screen.getByText(previousButton)).toBeInTheDocument();
  //   });

  it("Should render the next page button if available", () => {
    render(
      <PaginationButtonList
        pageInfo={{
          hasPreviousPage: false,
          hasNextPage: true,
          startCursor: "123445",
          endCursor: "6789",
        }}
        queryParams={queryParams}
        onClickTogglePage={onClickTogglePage}
        getNextPage={getProducts}
      />
    );
    const nextButton = screen.getByTestId("next-pagination-button");
    expect(nextButton).toBeInTheDocument();
  });

  it("should call onClickTogglePage when next button is clicked", () => {
    const expectedNextPageQuery = {
      variables: {
        before: "6789",
        channel: "uk",
        filter: { isPublished: true },
        first: 0,
        last: 20,
        sortBy: { direction: "ASC", field: "RANK" },
      },
    };
    render(
      <PaginationButtonList
        pageInfo={{
          hasPreviousPage: false,
          hasNextPage: true,
          startCursor: "123445",
          endCursor: "6789",
        }}
        queryParams={queryParams}
        onClickTogglePage={onClickTogglePage}
        getNextPage={getProducts}
      />
    );
    const nextButton = screen.getByTestId("next-pagination-button");
    fireEvent.click(nextButton);
    expect(onClickTogglePage).toBeCalledWith(
      getProducts,
      expectedNextPageQuery
    );
  });
});
