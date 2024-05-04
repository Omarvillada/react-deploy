import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock('../../src/hooks/useFetchGifts')

describe('Pruebas en <GifGrid/>', () => { 

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category));
        //screen.debug();
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifd', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
            }
        ]
        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);
        //screen.debug()

     })
 })