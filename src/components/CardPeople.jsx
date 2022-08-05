import React from 'react'
import peopleDefault from '../assets/imagenes/people-default.png'
const CardPeople = ({ name, image}) => {
  return (
    <div className='card-people'>
        <div className='card-imagen'>
           <img className='img-fluid' src={(image === null) ? peopleDefault : image.medium} alt="" />
        </div>
        <div className='card-info'>
            <div>{name}</div>
        </div>
    </div>
  )
}

export default CardPeople