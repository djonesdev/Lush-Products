import { StyledButton } from "components/styles";
import styled from "styled-components";

const LoadMoreButtonStyles = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

export default function PaginationButtonList({
  hasPreviousPage,
  hasNextPage,
  getNextPage,
  queryParams,
  onClickTogglePage,
  startCursor,
  endCursor,
}) {
  const pageLimit = 20;
  const getNextPageQueryParams = {
    variables: {
      ...queryParams,
      last: pageLimit,
      first: 0,
      before: endCursor,
    },
  };
  // TODO: This doesn't seem to be working correctly, i expect the below query
  // to return the last 20 products before the current first product occupying index 0
  // Looks like it actually takes me back to the beginning of the products list and carries on from there
  const getPreviousPageQueryParams = {
    variables: {
      ...queryParams,
      first: pageLimit,
      last: 0,
      after: endCursor,
    },
  };

  return (
    <LoadMoreButtonStyles>
      {hasPreviousPage && (
        <StyledButton
          primary
          onClick={() =>
            onClickTogglePage(getNextPage, getPreviousPageQueryParams)
          }
          data-testid="previous-pagination-button"
        >
          Load previous page
        </StyledButton>
      )}
      {hasNextPage && (
        <StyledButton
          primary
          onClick={() => onClickTogglePage(getNextPage, getNextPageQueryParams)}
          data-testid="next-pagination-button"
        >
          Load next page
        </StyledButton>
      )}
    </LoadMoreButtonStyles>
  );
}
