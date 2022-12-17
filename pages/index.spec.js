import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import Home from './index';

import { PRODUCT_QUERY } from '../graphQL/queries/products';
import { act } from 'react-dom/test-utils';
import mockProductsResponse from '../utils/testUtils/mockProductsResponse';

const mockQuery = [
  {
    request: {
      query: PRODUCT_QUERY,
        variables: { 
            channel: 'uk', 
            first: 10, 
            last: 0, 
            filter: {
                isPublished: true,
            }
        }
    },
    result: {
        loading: false,
        data: mockProductsResponse
    }
}
]


describe('Products list page', () => {
    it('Should contain items from a successful query', async () => {
        await act(async () => {
            render(
                <MockedProvider mocks={mockQuery}>
                    <Home />
                </MockedProvider>
            )
            }
        )
        expect(await screen.findByText('Whoosh')).toBeInTheDocument();
    });
});