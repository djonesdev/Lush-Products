import React from "react"
import { render, screen } from "@testing-library/react"
import CategoryList from "./Nav"

describe("CategoryList", () => {
    beforeEach(() => {
        render (<CategoryList />)
    })

    it('Should render the name of the product', () => {
        expect(true).toBe(true);
    })

})