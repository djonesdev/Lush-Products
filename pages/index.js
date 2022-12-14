import React from 'react'
import styled from 'styled-components'

import ItemOverview from '../components/ItemOverview'

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function index() {
    return (
        <ProductsListStyles>
            <ItemOverview product={{
  // __typename: 'Item',
  id: 'abc123',
  price: 5000,
  user: null,
  photo: {
    id: 'abc123',
    altText: 'Bath bomb',
    image: {
      url: 'test.jpg',
    },
  },
  name: 'Bath bomb',
  description: 'Put it in your bath',
}} />
<ItemOverview product={{
  // __typename: 'Item',
  id: 'abc123',
  price: 5000,
  user: null,
  photo: {
    id: 'abc123',
    altText: 'Bath bomb',
    image: {
      url: 'test.jpg',
    },
  },
  name: 'Bath bomb',
  description: 'Put it in your bath',
}} /><ItemOverview product={{
    // __typename: 'Item',
    id: 'abc123',
    price: 5000,
    user: null,
    photo: {
      id: 'abc123',
      altText: 'Bath bomb',
      image: {
        url: 'test.jpg',
      },
    },
    name: 'Bath bomb',
    description: 'Put it in your bath',
  }} /><ItemOverview product={{
    // __typename: 'Item',
    id: 'abc123',
    price: 5000,
    user: null,
    photo: {
      id: 'abc123',
      altText: 'Bath bomb',
      image: {
        url: 'test.jpg',
      },
    },
    name: 'Bath bomb',
    description: 'Put it in your bath',
  }} /><ItemOverview product={{
    // __typename: 'Item',
    id: 'abc123',
    price: 5000,
    user: null,
    photo: {
      id: 'abc123',
      altText: 'Bath bomb',
      image: {
        url: 'test.jpg',
      },
    },
    name: 'Bath bomb',
    description: 'Put it in your bath',
  }} /><ItemOverview product={{
    // __typename: 'Item',
    id: 'abc123',
    price: 5000,
    user: null,
    photo: {
      id: 'abc123',
      altText: 'Bath bomb',
      image: {
        url: 'test.jpg',
      },
    },
    name: 'Bath bomb',
    description: 'Put it in your bath',
  }} />
        </ProductsListStyles>
    )
}
