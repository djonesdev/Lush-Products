import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import styled from "styled-components";

import { StyledButton, Card } from "components/styles";
import { PRODUCT_QUERY } from "graphQL/queries/products";
import { onClickTogglePage } from "./handlers";
import { DisplayError, ItemOverview } from "components";

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 70px;
  }
  grid-gap: 80px;
`;

const LoadMoreButtonStyles = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

export default function HomePage() {
  const pageLimit = 20;
  const queryParams = {
    channel: "uk",
    first: pageLimit,
    last: 0,
    filter: {
      isPublished: true,
    },
    sortBy: { direction: "ASC", field: "RANK" },
  };

  const [getProducts, { loading: isLoading, error, data }] =
    useLazyQuery(PRODUCT_QUERY);

  useEffect(() => {
    getProducts({ variables: queryParams });
  }, []);

  const getNextPageQueryParams = {
    variables: queryParams,
    last: pageLimit,
    first: 0,
    before: data?.products?.pageInfo.startCursor,
  }
  // TODO: This doesn't seem to be working correctly, i expect the below query
  // to return the last 20 products before the current first product occupying index 0
  // Looks like it actually takes me back to the beginning of the products list and carries on from there
  const getPreviousPageQueryParams = {
    variables: {
      ...queryParams,
      first: 0,
      last: pageLimit,
      before: data?.products?.pageInfo.endCursor,
    },
  }


  if (isLoading) return <p>Loading... </p>;
  if (error) return <DisplayError error={error} />;
  return (
    <>
      <ProductsListStyles>
        {data?.products?.edges?.map((product) => (
          <Card key={product.node.key}>
            <ItemOverview product={product} />
          </Card>
        ))}
      </ProductsListStyles>
      <LoadMoreButtonStyles>
        {data?.products?.pageInfo?.hasPreviousPage && (
          <StyledButton
            primary
            onClick={() =>
              onClickTogglePage(getProducts, getNextPageQueryParams)
            }
          >
            Load previous page
          </StyledButton>
        )}
        {data?.products?.pageInfo?.hasNextPage && (
          <StyledButton
            primary
            onClick={() =>
              onClickTogglePage(getProducts, getPreviousPageQueryParams)
            }
          >
            Load next page
          </StyledButton>
        )}
      </LoadMoreButtonStyles>
    </>
  );
}
