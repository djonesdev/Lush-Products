import { useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import ItemOverview from "../components/ItemOverview/ItemOverview";
import StyledButton from "../components/styles/ButtonStyles";
import { PRODUCT_QUERY } from "../graphQL/queries/products";

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
`;

const LoadMoreButtonStyles = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const ProductContainerStyles = styled.div`
    opacity: ${props => props.isLoading ? 0.3 : 1};
`;

export default function HomePage() {
  const [queryParams, setQueryParams] = useState({
    channel: "uk",
    first: 10,
    last: 0,
    isPublished: true,
  });

  const {
    data,
    loading: isLoading,
    error = false,
    fetchMore,
  } = useQuery(PRODUCT_QUERY, {
    variables: queryParams,
  });

  console.log(error, 'this is the error')
  
  const onClickLoadMore = () => {
      setQueryParams({ ...queryParams, first: queryParams.first + 10 });
      fetchMore({ ...queryParams, first: queryParams.first + 10 });
    };
    
      // if (!data) return <p>Loading... </p>;
    if (error) return <p>We have an error! Please try again later</p>;
  return (
    <ProductContainerStyles isLoading={isLoading}>
      <ProductsListStyles>
        {data?.products?.edges?.map((product) => (
          <ItemOverview key={product.node.key} product={product} />
        ))}
      </ProductsListStyles>
      <LoadMoreButtonStyles>
        {data?.products?.pageInfo?.hasNextPage && (
          <StyledButton primary onClick={onClickLoadMore}>
            Load more
          </StyledButton>
        )}
      </LoadMoreButtonStyles>
    </ ProductContainerStyles>
  );
}
