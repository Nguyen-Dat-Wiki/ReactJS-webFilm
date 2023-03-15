import * as Types from '../type';


const ReducerMovieinitialState = {
    NetflixOriginals:null,
    NetflixOriginalTvs:null,
    TrendingMovies:null,
    SeachMovie:null,
}

const ReducerMovie = (state = ReducerMovieinitialState, action) => {
    const {type,payload} = action
    switch (type) {
        case Types.GET_NETFLIX_ORIGINALS:
            return {...state, NetflixOriginals:payload}
        case Types.GET_NETFLIX_ORIGINALTVS:
            return {...state, NetflixOriginalTvs:payload}
        case Types.GET_TRENDING_MOVIES:
            return {...state, TrendingMovies:payload}
        case Types.GET_SEARCH_MOVIE:
            return {...state, SeachMovie:payload}
    default:
        return state
    }
}
export default ReducerMovie