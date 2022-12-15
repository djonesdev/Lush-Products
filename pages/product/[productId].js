import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { SINGLE_PRODUCT_QUERY } from '../../graphQL/queries/singleProduct'
import DisplayError from '../../components/ErrorMessage'
import SingleProduct from '../../components/SingleProduct/SingleProduct';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default function SingleProductPage() {
    const { query } = useRouter()
    const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: {
          id: query.productId,
          channel: 'uk',
        },
      });
    if (loading) return <p>Loading...</p>;
    if (error) return <DisplayError error={error} />;

    const { product } = data
    return <SingleProduct product={product} />;
}