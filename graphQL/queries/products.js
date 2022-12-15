import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
    query($channel: String, $first: Int, $last: Int, $filter: ProductFilterInput) {
        products(channel: $channel, first: $first, last: $last, filter: $filter) {
            edges {
                node {
                    id, 
                    name,
                    description, 
                    isAvailable,
                    isAvailableForPurchase,
                    pricing {
                        priceRange {
                            start {
                                gross {
                                    amount
                                }
                            }
                        }
                    }, 
                    thumbnail {
                        url, 
                        alt
                    }, 
                }
            }
        }
    }
`