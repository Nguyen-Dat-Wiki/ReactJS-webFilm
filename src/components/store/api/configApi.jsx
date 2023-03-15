import axios from "axios";
import * as Types from '../type';
const API_KEY = '02e10349d648740c19627883697486d1';
const BASE_URL= 'https://api.themoviedb.org/3';


export const getNetflixOriginals = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload:result.data.results});
    } catch (error) {
        console.log('error',error);
    }
}
export const getNetflixOriginalsTV = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINALTVS, payload:result.data.results});
    } catch (error) {
        console.log('error',error);
    }
}
export const getTrendingMovies = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: Types.GET_TRENDING_MOVIES, payload:result.data.results});
    } catch (error) {
        console.log('error',error);
    }
}
export const searchMovie = (keyword) => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
        );
        dispatch({type: Types.GET_SEARCH_MOVIE, payload:result.data.results});
    } catch (error) {
        console.log('error',error);
    }
}

export const category = {
    movie: '/mv',
    tv: '/tv'
} 