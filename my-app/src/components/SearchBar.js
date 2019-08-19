import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import '../style/menu.css'


function SearchBar() {

        const selectedMovie = useSelector( state => state.movies.selectedMovie);
        const searchAlgorithm = useSelector(state => state.search.searchAlgorithm);
        const dispatch = useDispatch();

        function handleUpdateSearchTerm(event) {
            if(event.target.value.toString().length >= 3){
            dispatch({
                type: "UPDATE_SEARCH_TERM",
                payload: event.target.value
            })
            }
        }

        function formatSearchAlgorithmTitle(searchAlgorithm) {
            if(searchAlgorithm) {
                return searchAlgorithm.replace(/_/, " ")
            }
        }

        return (
            <div className="query_title" hidden={selectedMovie}>
                <div className="left"> {formatSearchAlgorithmTitle(searchAlgorithm)} </div>
                <div className="right" hidden={!searchAlgorithm}>
                    <div className="mdl-textfield mdl-js-textfield  ">
                        <label className="mdl-button mdl-js-button mdl-button--icon mdl-button--raised"
                               htmlFor="fixed-header-drawer-exp">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input"  type="text" name="searchInput"
                                   id="fixed-header-drawer-exp" onChange={handleUpdateSearchTerm}/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default SearchBar;