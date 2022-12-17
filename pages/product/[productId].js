import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { SINGLE_PRODUCT_QUERY } from '../../graphQL/queries/singleProduct'
import DisplayError from '../../components/ErrorMessage'
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import Card from '../../components/styles/CardStyles';

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
    return (
      <Card>
        <SingleProduct product={product} />
      </Card>
    );
}