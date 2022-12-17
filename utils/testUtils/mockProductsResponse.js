export default {
    products: {
        pageInfo: {
            hasNextPage: true, 
            hasPreviousPage: true, 
            endCursor: '123456', 
            startCursor: '45677'
        }, 
        edges: [
            {
                __typename:"ProductCountableEdge",
                cursor: '123456',
                node: { 
                    __typename: "Product",
                    id: "UHJvZHVjdDoxMjk=",
                    name:"Whoosh",
                    description: '"description": "lorem ipsum"',
                    isAvailable: true,
                    isAvailableForPurchase: true,
                    pricing: {
                        priceRange: {
                            start: {
                                gross: {
                                    amount: 10
                                }
                            }
                        }
                    },
                    thumbnail: {
                        __typename: "Image",
                        url: "https://twstg2.eu.saleor.cloud/media/__sized__/products/whoosh_shower_jelly_2020-thumbnail-255x255.png",
                        alt:""
                    }
                } 
            }
        ]
    }
}