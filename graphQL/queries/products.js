import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query (
    $channel: String
    $first: Int
    $last: Int
    $filter: ProductFilterInput
    $before: String
    $after: String
    $sortBy: ProductOrder
  ) {
    products(
      channel: $channel
      first: $first
      last: $last
      filter: $filter
      before: $before
      after: $after
      sortBy: $sortBy
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          description
          isAvailable
          isAvailableForPurchase
          pricing {
            priceRange {
              start {
                gross {
                  amount
                }
              }
            }
          }
          thumbnail {
            url
            alt
          }
        }
      }
    }
  }
`;
