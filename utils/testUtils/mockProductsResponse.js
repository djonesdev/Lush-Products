export default {
    products: {
        pageInfo: {}, 
        edges: [
            {
                __typename:"ProductCountableEdge",
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