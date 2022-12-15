import React from "react"
import { render, screen } from "@testing-library/react"
import { RouterContext } from "next/dist/shared/lib/router-context";

import { routerMock } from "../../utils/testUtils/mockRouter";
import Header from "./Header"

const push = jest.fn().mockResolvedValue(true);

describe("Header", () => {
    beforeEach(() => {
        render (
            <RouterContext.Provider value={routerMock}>
                <Header />
            </RouterContext.Provider>
        )
    })

    it('Should render the page title', () => {
        expect(screen.getByText('Cosmetics')).toBeInTheDocument();
    })

    it("should navigate accordingly", () => {
        const titleLink = screen.getByText('Cosmetics')
        titleLink.click()
        expect(routerMock.push).toHaveBeenCalled()
    })
})