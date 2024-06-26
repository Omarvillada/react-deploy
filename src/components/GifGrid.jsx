import { GifItem } from "./GifItem"
import { useFetchGifts } from "../hooks/useFetchGifts"
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {

  //Estado que se conserva cuando se reenderiza el componente
  const { images, isLoading } = useFetchGifts( category )

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }

        <div className='card-grid'>
          {
            images.map( (image) => (

                <GifItem 
                key={image.id}
                {...image} />
              
            ))
          }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
} 