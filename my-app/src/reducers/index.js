import { combineReducers } from "redux";
import movies from "./movieReducer";
import search from "./searchReducer"


// So we can combine the 2 reducers
const rootReducers = combineReducers({
    movies,
    search
});

export default rootReducers;
