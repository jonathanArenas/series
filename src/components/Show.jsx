import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Episodes from './Episodes'
import ShowPeople from './ShowPeople'
import tmdbApi from '../utils/tmdbApi'
import '../styles/show.css'
const Show = () => {
    const [dataShow, setDataShow] = useState(null)
    const { showID } = useParams()
    const navigate = useNavigate()
    const getDataShow = async () => {
        const { data } = await tmdbApi.getShow(showID)
        if (data !== null) {
            setDataShow(data)

        } else {
            dataShow === null && navigate('/404')
        }
    }


    useEffect(() => {
        // dataMovie === null && navigate('/404')
        getDataShow()
        //people = serializePeople(dataShow['_embedded'].cast)

    }, [])

    return dataShow && (
        <div className='container'>
            <div className='row'>
                <div className='col-12 co-lg-12 col-md-12'>
                        <div className='name'>{dataShow.name}</div> 
                </div>
                <div className='col-12  col-lg-4 col-md-4'>
                    <div className='imagen'>
                        <img className='img-fluid' src={dataShow.image.original} alt={dataShow.name} />
                    </div>
                </div>
                <div className='col-12 col-lg-8 col-md-8'>
                    <div className='row full align-items-center'>
                        <div className='col-12 col-lg-12 col-md-12  mt-5'>
                            <div className='details'>
                                <div className='box ended'> {dataShow.ended}</div>
                                <div className='box runtime'>{`${dataShow.runtime} Min.`}</div>
                                <div className='box language'>{dataShow.language}</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-12 col-md-12'>
                                <h4>Genres:</h4>
                                <p className='fs-5'>{ dataShow.genres.map(item =>{
                                    return `| ${item} `
                                })}</p>
                        </div>
                        <div className='col-12 col-lg-12 col-md-12'>
                                <p className='text-start fs-5 fw-light'>
                                {
                                dataShow.summary.replace( /(<([^>]+)>)/ig, '')
                                }
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                    <Episodes id={dataShow.id} />   
            </div>
            <div className='row mt-5'>
                <h2>Cast</h2>
                <div className='container-shows'>
                    <ShowPeople cast={dataShow._embedded} />
                </div> 
            </div>
        </div>
    )
}

export default Show
