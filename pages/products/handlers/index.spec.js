import { onClickTogglePage, onClickCategory } from '.'

const mockFunction = jest.fn()
const mockSetState = jest.fn()

describe("Products Page Handlers", () => {

    describe('onClickTogglePage', () => {

        it('Should call passed in function with provided params', () => {
            onClickTogglePage(mockFunction, { test: "12345" })
            expect(mockFunction).toBeCalledWith({ test: "12345" })
            
            onClickTogglePage(mockFunction, { key: 12345 })
            expect(mockFunction).toBeCalledWith({ key: 12345 })
            
            onClickTogglePage(mockFunction, 'TEST')
            expect(mockFunction).toBeCalledWith('TEST')
        })
    })

    describe('onClickCategory', () => {
        it('Should do stuff', () => {
            onClickCategory('12345', [], mockSetState)
            expect(mockSetState).toHaveBeenCalled()
        })
    })

})