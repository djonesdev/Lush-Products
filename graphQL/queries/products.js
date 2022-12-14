import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
    query($channel: String, $first: Int, $last: Int) {
        products(channel: $channel, first: $first, last: $last) {
            edges {
                node {
                    id, 
                    name,
                    description, 
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