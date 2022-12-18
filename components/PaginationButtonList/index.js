import { StyledButton } from "components/styles";
import styled from "styled-components";

const LoadMoreButtonStyles = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

export default function PaginationButtonList({
  getNextPage,
  queryParams,
  onClickTogglePage,
  pageInfo,
}) {
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo || {}
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
  // to return the last 20 products before the current startCursor 
  // instead it takes me to another part of the list
  const getPreviousPageQueryParams = {
    variables: {
      ...queryParams,
      first: 0,
      last: pageLimit,
      before: startCursor,
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
