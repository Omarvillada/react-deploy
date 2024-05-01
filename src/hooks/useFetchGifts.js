import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGidts"


export const useFetchGifts = (category) => {

    const [images, setimages] = useState([])
    const [isLoading, setloading] = useState(true)
    
    const getImages = async () => {
        
        const newImages = await getGifts(category)
        setimages(newImages)
        setloading(false)
    }

    useEffect(() => {
        getImages()

    }, [])
    return {
        images,
        isLoading,

    }
}
