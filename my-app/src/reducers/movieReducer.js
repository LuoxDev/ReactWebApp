
const initialState = {
    selectedMovie: null,
};

const movies = ( state = initialState, action)=>{

    switch (action.type) {

        case 'GET_MOVIE':
            console.log(action.payload);
            return {
                ...state,
                selectedMovie: action.payload,
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                selectedMovie: null
            };
        default:
            return state;
    }
};

export default movies;