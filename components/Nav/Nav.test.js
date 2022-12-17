import React from "react"
import { render, screen } from "@testing-library/react"
import CategoryList from "./Nav"

describe("CategoryList", () => {
    beforeEach(() => {
        render (<CategoryList />)
    })

    it('Should render the name of the product', () => {
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Sell')).toBeInTheDocument();
        expect(screen.getByText('Orders')).toBeInTheDocument();
        expect(screen.getByText('Account')).toBeInTheDocument();
    })

})