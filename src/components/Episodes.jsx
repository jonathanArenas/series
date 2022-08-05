import React, { useState, useEffect } from 'react'
import tmdbApi from '../utils/tmdbApi'

const Episodes = ({ id }) => {
    const [episodes, setEpisodes] = useState(null)

    const getEpisodes = async () => {
        const { data } = await tmdbApi.episodes(id)
        if (data !== null) {
            setEpisodes(data)
        } else {
            setEpisodes([])
        }
    }

    useEffect(() => {
        getEpisodes()
    }, [])

    return episodes && (
        <div className='col-12 col-lg-12 col-md-12'>
            <div className='d-grid gap-2'>
                <button className='btn btn-outline-primary fs-4' type='button' data-bs-toggle="collapse" data-bs-target='#collapseEpisodes' aria-expanded='false' aria-controls='collapseEpisodes'>Episodes</button>
            </div>
            <div className='collapse' id='collapseEpisodes'>
                <div className="card card-body">
                    <div className='accordion accordion-flush' id='accordionExample'>
                        {episodes.map((item, key) => (
                            <div className='accordion-item' key={key}>
                                <h2 className='accordion-header' id={`heading${key}`} >
                                    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${key}`} aria-expanded='false' aria-controls={`collapse${key}`} >
                                        {`Season-${item.season}/ Episode ${item.number}.- ${item.name}`}
                                    </button>
                                </h2>
                                <div id={`collapse${key}`} className="accordion-collapse collapse" aria-labelledby={`heading${key}`} data-bs-parent='#accordionExample'>
                                    <div className="accordion-body">
                                        <div className='row'>
                                            <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <img className='img-fluid' src={item.image.medium} alt="" />
                                            </div>
                                            <div className='col-sm-8 col-md-8 col-lg-8'>
                                                <div className='text-dark'>
                                                    <p>{item.summary.replace(/(<([^>]+)>)/ig, '')}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes