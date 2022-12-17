import { gql } from "@apollo/client";

export const CATEGORIES_QUERY = gql`
  query (
    $filter: CategoryFilterInput
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    categories(
      filter: $filter
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        __typename
        cursor
        node {
          name
          id
        }
      }
    }
  }
`;
