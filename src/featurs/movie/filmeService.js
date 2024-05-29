import axios from "axios"


export const fatchMovie = async () => {
    const response = await axios.get("https://freetestapi.com/api/v1/movies")
    // console.log(response.data.results[0].title)
    return response.data;

}

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`https://freetestapi.com/api/v1/movies/${id}  `)
    // console.log(response.data.results[0].title)
    return response.data;

}


export const searchmovie = async (query) => {
    console.log(query)
    const response = await axios.get(`https://freetestapi.com/api/v1/movies?search=${query}`)
    console.log(response.data)
    return response.data;

}








