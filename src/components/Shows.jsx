
import showsFetcher from '../hooks/showsFetcher'
import { useState } from 'react'
import ShowsList from './ShowsList'
import Form from './Form'
import Loading from './Loading'

function Shows () {
  const [query, setQuery] = useState(null)
  const { dataState, loading } = showsFetcher(query)
  const [back, setBack] = useState(false)

  const handleSubmit = async (text) => {
    setQuery(text)
    setBack(true)
  }

  const goBack = () => {
    setQuery(null)
    setBack(false)
  }

  return (

    <div className='container'>
      <Form search={handleSubmit} />
      <div className='row'>

        <div className='col-11'>
          <h3 className='fs-1'>Shows</h3>
        </div>
        <div className='col-1'>
          <div className='d-grid gap-2'>
            {(back) ? <button type='button' style={{ color: 'white' }} className='btn bg-primary' onClick={goBack}> <i className='bi bi-arrow-return-left' /></button> : <></>}
          </div>
        </div>
      </div>
      <div className='container-shows'>
        {loading ? <Loading /> : <ShowsList data={dataState} />}
      </div>

    </div>
  )
}

export default Shows
