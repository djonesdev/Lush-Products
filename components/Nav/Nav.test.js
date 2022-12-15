import React from "react"
import { render, screen } from "@testing-library/react"
import Nav from "./Nav"

describe("Nav", () => {
    beforeEach(() => {
        render (<Nav />)
    })

    it('Should render the name of the product', () => {
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Sell')).toBeInTheDocument();
        expect(screen.getByText('Orders')).toBeInTheDocument();
        expect(screen.getByText('Account')).toBeInTheDocument();
    })

})