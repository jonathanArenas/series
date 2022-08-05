
import peopleFetcher from '../hooks/peopleFetcher'
import { useState } from 'react'
import PeopleList from './PeopleList'
import Form from './Form'
import Loading from './Loading'

function People() {
  const [query, setQuery]  = useState(null)
  const { dataState, loading } = peopleFetcher(query)

  const handleSubmit = async (text) => {
    setQuery(text)
  }

  return (
  
     <div className='container'>
     <Form search={handleSubmit} />
     <div className='container-shows'>
       {loading ? <Loading /> : <PeopleList data={dataState} />}
     </div>
   </div>
  )
}

export default People
