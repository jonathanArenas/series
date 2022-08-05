import { useEffect, useState } from 'react'
import tmdbApi from '../utils/tmdbApi'


const peopleFetcher = (query) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
  
    const { data } = (query != null)? serialize(await tmdbApi.searchPeople(query)): await tmdbApi.getPeople() 
    if (data !== null) {
      setDataState(data)
    } else {
      setDataState([])
    }
    setLoading(false)
  }
  const serialize = ({data}) =>{    
    return {data:  data.map(function(item){
      return item.person

    })}
  }
  useEffect(() => {
    getData()
  }, [query])

  return { dataState, loading }
}

export default peopleFetcher
