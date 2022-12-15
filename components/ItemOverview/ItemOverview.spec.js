import React from "react"
import { render, screen } from "@testing-library/react"
import ItemOverview from "./ItemOverview"
import { mockProduct } from "../../utils/testUtils/mockProduct"

describe("ItemOverview", () => {
    beforeEach(() => {
        render (<ItemOverview product={mockProduct} />)
    })

    it('Should render the name of the product', () => {
        expect(screen.getByText('Whoosh')).toBeInTheDocument();
    })

    it('Should render a button list', () => {
        expect(screen.getByText('More Information')).toBeInTheDocument();
        expect(screen.getByText('Add to cart')).toBeInTheDocument();
    })
})