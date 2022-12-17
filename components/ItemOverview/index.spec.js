import React from "react"
import { render, screen } from "@testing-library/react"
import ItemOverview from "."
import mockProductsResponse from "../../utils/testUtils/mockProductsResponse"

describe("ItemOverview", () => {
    beforeEach(() => {
        render (
            <ItemOverview product={mockProductsResponse.products.edges[0]} />
        )
    })

    it('Should render the name of the product', () => {
        expect(screen.getByText('Whoosh')).toBeInTheDocument();
    })

    it('Should render a button list', () => {
        expect(screen.getByText('Add to cart')).toBeInTheDocument();
    })
})