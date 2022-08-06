import { useEffect, useState } from 'react'
import tmdbApi from '../utils/tmdbApi'

const showsFetcher = (query) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = (query != null) ? serialize(await tmdbApi.searchShows(query)) : await tmdbApi.getShows()
    if (data !== null) {
      setDataState(data)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  const serialize = ({ data }) => {
    return {
      data: data.map(function (item) {
        return item.show
      })
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return { dataState, loading }
}

export default showsFetcher
