import { onClickTogglePage } from '.'

const mockFunction = jest.fn()

describe("Products Page Handlers", () => {
    it('Should call passed in function with provided params', () => {
        onClickTogglePage(mockFunction, { test: "12345" })
        expect(mockFunction).toBeCalledWith({ test: "12345" })

        onClickTogglePage(mockFunction, { key: 12345 })
        expect(mockFunction).toBeCalledWith({ key: 12345 })

        onClickTogglePage(mockFunction, 'TEST')
        expect(mockFunction).toBeCalledWith('TEST')
    })
})