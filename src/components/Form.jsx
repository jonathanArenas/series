import React from 'react'
import { useState } from 'react'

const Form = ({ search }) => {
    const [texto, setTexto] = useState('')
    
    const submit = (e) =>{
        e.preventDefault()
        search(texto)
        setTexto('')
        e.target.reset()
    }

  return (
    <section className='mb-5'>
        <div className='row'>
        
            <div className='col-12 col-lg-4 offset-lg-8 col-md-6 offset-md-6'>
            <form onSubmit={submit}>
        <div className='input-group'>
          <input
            type='search'
            placeholder='Buscar'
            className='form-control'
            name='buscador'
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            autoFocus
          />
          <input className='btn btn-primary' type="submit" value='Buscar' />
        </div>
      </form>
            </div>
        </div>
      </section> 
  )
}

export default Form