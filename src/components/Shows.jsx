
import showsFetcher from '../hooks/showsFetcher'
import { useState} from 'react'
import ShowsList from './ShowsList'
import Form from './Form'
import Loading from './Loading'


function Shows() {
  const [query, setQuery] = useState(null)
  const { dataState, loading } = showsFetcher(query)

  const handleSubmit = async (text) => {
       setQuery(text)
  }

  return (

    <div className='container'>
      <Form search={handleSubmit} />
      <h3 className='fs-1'>Shows</h3>
      <div className='container-shows'>
        {loading ? <Loading /> : <ShowsList data={dataState} />}
      </div>

    </div>
  )
}

export default Shows
