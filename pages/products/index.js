import { useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import styled from "styled-components";

import { Card } from "components/styles";
import { PRODUCT_QUERY } from "graphQL/queries/products";
import { CATEGORIES_QUERY } from "graphQL/queries/categories";
import { onClickTogglePage } from "./handlers";
import {
  CategoryList,
  DisplayError,
  ItemOverview,
  PaginationButtonList,
} from "components";

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

  const { data: categoryData } = useQuery(CATEGORIES_QUERY, {
    variables: { first: 10 },
  });

  useEffect(() => {
    getProducts({ variables: queryParams });
  }, []);

  const onClickCategory = (category) => {
    const query = {
      variables: queryParams,
      last: pageLimit,
      first: 0,
      before: data?.products?.pageInfo.startCursor,
      filter: { search: category },
    };
    onClickTogglePage(getProducts, query);
  };

  if (isLoading) return <p>Loading... </p>;
  if (error) return <DisplayError error={error} />;
  return (
    <>
      <CategoryList
        onClick={onClickCategory}
        categories={categoryData?.categories}
      />
      <ProductsListStyles>
        {data?.products?.edges?.map((product) => (
          <Card key={product.node.key}>
            <ItemOverview product={product} />
          </Card>
        ))}
      </ProductsListStyles>
      <PaginationButtonList
        hasPreviousPage={data?.products?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.products?.pageInfo?.hasNextPage}
        queryParams={queryParams}
        onClickTogglePage={onClickTogglePage}
        startCursor={data?.products?.pageInfo.startCursor}
        endCursor={data?.products?.pageInfo.endCursor}
        getNextPage={getProducts}
      />
    </>
  );
}
