import { render, screen } from "@testing-library/react"
import { GiftApp } from "../src/GiftApp"

//Recomienda pruebas para este componente.
describe('Pruebas en el componentes GiftApp ', () => { 

    test('Debe de mostrar el titulo', () => {
        render(<GiftApp />)
        // screen.debug()
        expect(screen.getByText('GifApp')).toBeTruthy()
    })

    //Debe mostrar la categoria por defecto.
    test('Debe de mostrar la categoria por defecto', () => {
        render(<GiftApp />)
        expect(screen.getByText('Friederich Nietzsche')).toBeTruthy()
    })
    //Que otras pruebas?


 })