import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => { 
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'
    
    test('Debe de hacer match con el snapshot', () => { 
       const { container } = render(<GifItem title= {title} url={url}/>)
       expect(container).toMatchSnapshot()
     })

     test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        const { getByRole } = render(<GifItem title= {title} url={url}/>)
        //screen.debug();
        const { src, alt } = getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
     })
 })