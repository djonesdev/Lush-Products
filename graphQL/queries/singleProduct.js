import { gql } from "@apollo/client";

export const SINGLE_PRODUCT_QUERY = gql`
    query($id: ID, $slug: String, $channel: String) {
        product(id: $id, slug: $slug, channel: $channel) {
            id, 
            name, 
            description, 
            rating, 
            thumbnail {
                url, 
                alt
            }, 
            pricing {
                priceRange {
                    start {
                        gross {
                            amount
                        }
                    }
                }
            },
            media {
                id, 
                alt, 
                url
            },
        }
    }
`