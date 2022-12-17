import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query (
    $channel: String
    $first: Int
    $last: Int
    $filter: ProductFilterInput
    $before: String
    $after: String
  ) {
    products(
      channel: $channel
      first: $first
      last: $last
      filter: $filter
      before: $before
      after: $after
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
