import { combineReducers } from "redux";
import ReducerMovie from "./reducermovie";

const rootReducer = combineReducers({
    introMovies: ReducerMovie
});

export default rootReducer