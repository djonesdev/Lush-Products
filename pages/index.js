import { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import styled from "styled-components";

import ItemOverview from "../components/ItemOverview/ItemOverview";
import StyledButton from "../components/styles/ButtonStyles";
import Card from "../components/styles/CardStyles";
import { PRODUCT_QUERY } from "../graphQL/queries/products";
import DisplayError from "../components/ErrorMessage";

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
  const queryParams = {
    channel: "uk",
    first: 20,
    last: 0,
    filter: {
      isPublished: true,
    },
  };

  const [getProducts, { loading: isLoading, error, data }] =
    useLazyQuery(PRODUCT_QUERY);

  useEffect(() => {
    getProducts({ variables: queryParams });
  }, []);

  const onClickLoadMore = () => {
    getProducts({
      variables: {
        ...queryParams,
        first: 0,
        last: 20,
        before: data?.products?.pageInfo.endCursor,
      },
    });
  };

  const onClickLoadPrevious = () => {
    getProducts({
      variables: {
        ...queryParams,
        last: 0,
        first: 20,
        after: data?.products?.pageInfo.startCursor,
      },
    });
  };

  if (isLoading) return <p>Loading... </p>;
  if (error) return <DisplayError error={error} />;
  return (
    <>
      <ProductsListStyles>
        {data?.products?.edges?.map((product) => (
          <Card>
            <ItemOverview key={product.node.key} product={product} />
          </Card>
        ))}
      </ProductsListStyles>
      <LoadMoreButtonStyles>
        {data?.products?.pageInfo?.hasPreviousPage && (
          <StyledButton primary onClick={onClickLoadPrevious}>
            Load previous page
          </StyledButton>
        )}
        {data?.products?.pageInfo?.hasNextPage && (
          <StyledButton primary onClick={onClickLoadMore}>
            Load next page
          </StyledButton>
        )}
      </LoadMoreButtonStyles>
    </>
  );
}
