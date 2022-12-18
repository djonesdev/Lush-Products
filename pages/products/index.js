import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import styled from "styled-components";

import { Card } from "components/styles";
import { PRODUCT_QUERY } from "graphQL/queries/products";
import { CATEGORIES_QUERY } from "graphQL/queries/categories";
import { onClickCategory, onClickTogglePage } from "./handlers";
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

  const [activeCategories, setActiveCategories] = useState([]);

  const [getProducts, { loading: isLoading, error, data }] =
    useLazyQuery(PRODUCT_QUERY);

  const [getCategories, { data: categoryData }] =
    useLazyQuery(CATEGORIES_QUERY);

  useEffect(() => {
    getCategories({
      variables: { first: 10 },
    });
    getProducts({ variables: queryParams });
  }, []);

  useEffect(() => {
    const queryWithCategories = {
      variables: {
        ...queryParams,
        filter: { isPublished: true, categories: activeCategories },
      },
    };
    onClickTogglePage(getProducts, queryWithCategories);
  }, [activeCategories]);

  const onClickToggleCategory = (category) =>
    onClickCategory(category, activeCategories, setActiveCategories);

  if (error) return <DisplayError error={error} />;
  return (
    <>
      <CategoryList
        onClick={onClickToggleCategory}
        categories={categoryData?.categories}
        activeCategories={activeCategories}
        getCategories={getCategories}
      />
      {isLoading && <p>Loading... </p>}
      {!isLoading && (
        <>
          <ProductsListStyles>
            {data?.products?.edges?.map((product) => (
              <Card key={product.node.key}>
                <ItemOverview product={product} />
              </Card>
            ))}
          </ProductsListStyles>
          <PaginationButtonList
            queryParams={queryParams}
            onClickTogglePage={onClickTogglePage}
            pageInfo={data?.products?.pageInfo}
            getNextPage={getProducts}
          />
        </>
      )}
    </>
  );
}
