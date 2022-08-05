import axios from "axios";
import { api } from "./apiConfig";

const tmdbApi = {
    getShows : async () =>{
        return await axios.get(`${api}shows`)
    },
    searchShows: async ( params ) => {
        return await axios.get(`${api}search/shows?q=${params}`)
    },
    getShow: async (id) =>{
        return await axios.get(`${api}shows/${id}?embed=cast`)
    },
    getPeople : async () =>{
        return await axios.get(`${api}people`)
    },
    searchPeople : async (params) =>{
        return await axios.get(`${api}search/people?q=${params}`)
    },
    episodes: async ( id ) => {

        return await axios.get(`${api}shows/${id}/episodes`)
    },
 
}

export default tmdbApi;