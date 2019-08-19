import React from 'react'
import '../style/searchBar.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Menu(props) {

    const searchAlgorithms = {
        nowPlaying: 'now_playing',
        topRated: 'top_rated',
        popular: 'popular',
        airingToday: 'airing_today',
    };
    const types = {
        movie: '/movie/',
        tv: '/tv/'
    }

    const dispatch = useDispatch();

    const searchAlgorithm = useSelector(state => state.search.searchAlgorithm);
    const selectedMovie = useSelector( state => state.movies.selectedMovie);


    function handleUpdateSearchAlgorithm(type, searchAlgorithm) {
        dispatch({
            type:'UPDATE_SEARCH_ALGORITHM',
            payload: type + searchAlgorithm
        })
    }

    return (

        <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">MovieTvDb</span>
            <nav className="mdl-navigation">

                <nav className="ml-navigation" hidden={selectedMovie}>
                    <h1 className="mdl-mega-footer__heading"> Movies </h1>
                    <Link className={searchAlgorithm === '/movie/now_playing' ? "mdl-navigation__link is-active" : "mdl-navigation__link" } to={'/movie'}
                          onClick={() => handleUpdateSearchAlgorithm(types.movie, searchAlgorithms.nowPlaying)}>Now playing</Link>

                    <Link className={searchAlgorithm === '/movie/top_rated' ? "mdl-navigation__link is-active" : "mdl-navigation__link" } to={'/movie'}
                          onClick={() => handleUpdateSearchAlgorithm(types.movie, searchAlgorithms.topRated)}>Top rated</Link>

                    <Link className={searchAlgorithm === '/movie/popular' ? "mdl-navigation__link is-active" : "mdl-navigation__link" } to={'/movie'}
                          onClick={() => handleUpdateSearchAlgorithm(types.movie, searchAlgorithms.popular)}>Popular</Link>
                </nav>
                <nav className="ml-navigation"  hidden={selectedMovie}>
                    <h1 className="mdl-mega-footer__heading"> TV Shows </h1>
                    <Link className={searchAlgorithm === '/tv/airing_today' ? "mdl-navigation__link is-active" : "mdl-navigation__link" } to={'/tv'}
                          onClick={() =>handleUpdateSearchAlgorithm(types.tv, searchAlgorithms.airingToday)}>Airing Today</Link>

                    <Link className={searchAlgorithm === '/tv/top_rated' ? "mdl-navigation__link is-active" : "mdl-navigation__link" } to={'/tv'}
                          onClick={() =>handleUpdateSearchAlgorithm(types.tv, searchAlgorithms.topRated)}>Top rated</Link>

                    <Link className={searchAlgorithm === '/tv/popular' ? "mdl-navigation__link is-active" : "mdl-navigation__link" } to={'/tv'}
                          onClick={() =>handleUpdateSearchAlgorithm(types.tv, searchAlgorithms.popular)}>Popular</Link>
                </nav>
            </nav>
        </div>

    );

}


export default Menu