import { useQuery } from '@apollo/client';
import styled from 'styled-components'

import ItemOverview from '../components/ItemOverview/ItemOverview'
import { PRODUCT_QUERY } from '../graphQL/queries/products'

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function HomePage() {
    const initialQueryParams = { channel: 'uk', first: 0, last: 10, isPublished: true }
    const { data, loading: isLoading, error } = useQuery(PRODUCT_QUERY, {
        variables: initialQueryParams
    })

    if(isLoading) return <p>Loading... </p>
    if(error) return <p>We have an error! Please try again later {error}</p>
    return (
        <ProductsListStyles>
            {data?.products?.edges?.map(product =>
                <ItemOverview key={product.node.key} product={product} />
            )}
        </ProductsListStyles>
    )
}
