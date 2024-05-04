import { getGifts } from "../../src/helpers/getGidts"

describe('Pruebas en getGifts', () => { 
    
    test('debe retornar un arreglo de gitfs', async() => { 

        const gifs = await getGifts('One Punch');


        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
 })