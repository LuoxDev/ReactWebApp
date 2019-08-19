
const initialState = {
    searchInput: null,
    searchAlgorithm: null
};

const search = ( state = initialState, action)=>{

    switch (action.type) {

        case 'UPDATE_SEARCH_TERM':
            return{
                ...state,
                searchInput: action.payload,
                searchAlgorithm: 'SearchResults'
            };
        case 'UPDATE_SEARCH_ALGORITHM':
            console.log("updated")
            return{
                ...state,
                searchAlgorithm: action.payload,
                searchInput: ''
            };
        default:
            return state
    }
};

export default search;