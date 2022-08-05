import React from 'react'
import { Link } from 'react-router-dom'
import peopleDefault from '../assets/imagenes/people-default.png'

const ShowPeople = ({ cast }) => {
    return (
        cast.cast.length === 0
            ? <p className='text-center'>No se encontraron resultados</p>
            : (
                <ul className='row gx-0 gx-md-5 gy-4'>
                    {cast.cast.map(item => (
                        <li className='col-5 col-md-3 col-lg-3' key={item.person.id}>
                                <div className='showpeople'>
                                        <img className='img-fluid' src={(item.person.image === null) ? peopleDefault : item.person.image.medium} alt="" />   
                                    <div className='info'>
                                        <p className='fs-5 text-center'>{item.person.name}</p>
                                    </div>
                                </div>
                        </li>
                    )
                    )}
                </ul>
            )
    )
}

export default ShowPeople