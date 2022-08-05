import React from 'react'
import noImagen from '../assets/imagenes/nodisponible.png'
import '../styles/cardshow.css'
import {type as TYPE} from '../utils/type'
const CardShow = ({ name, image,  rating, type, language,averageRuntime }) => {
  return (
      <div className="card-content">
        <div className='imagen'>
          <img className='img-fluid' src={(image !== null) ? image.medium : noImagen} alt="" />
          <div className='middle'>
            <div className="rating">
             {rating.average}  
            </div>
          </div>
        </div>
        <div className='info'>
          <h5 className='text-center text-uppercase line-clamp'>{name}</h5>
          <div className='details language'>
             <p><strong className='text-uppercase'>Lenguage: </strong> {language}</p>
          </div>
          <div className='details runtime'>
             <p><strong className='text-uppercase'>Average runtime: </strong> {averageRuntime}</p>
          </div>
          <div className='details type'>
              <div className={`${TYPE.equals(type)} text-center fs-5`}>
                { type}
                </div>
          </div>
              
        </div>
      </div>
  )
}

export default CardShow