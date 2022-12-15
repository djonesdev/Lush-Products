import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import Home from './index';

import { PRODUCT_QUERY } from '../graphQL/queries/products';
import { act } from 'react-dom/test-utils';

const mockQuery = [
  {
    request: {
      query: PRODUCT_QUERY,
      variables: { channel: 'uk', first: 0, last: 10 },
    },
    result: {
        loading: false,
      data: {
        products: { 
            __typename:"ProductCountableConnection",
            edges: [
                {
                    __typename:"ProductCountableEdge",
                    node: { 
                        __typename: "Product",
                        id: "UHJvZHVjdDoxMjk=",
                        name:"Whoosh",
                        description: '"description": "lorem ipsum"',
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
                },
            ],
        },        
    },
  }
}]


describe('App tests', () => {
    it('should contains the heading 1', async () => {
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