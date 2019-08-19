import React from 'react';
import {useSelector} from "react-redux";
import '../style/infocard.css';
import {useDispatch} from "react-redux";

function InfoCard() {


    const selectedMovie = useSelector( state => state.movies.selectedMovie);
    const dispatch = useDispatch();

    let title = '';
    let name = '';
    let backdrop_path = '';
    let overview = '';

    if( selectedMovie != null){
         title = selectedMovie.title;
         name = selectedMovie.name;
         backdrop_path = selectedMovie.backdrop_path;
         overview = selectedMovie.overview;
    }

    function updateMovieState() {
        dispatch({
            type: 'REMOVE_MOVIE',
        })
    }

    return(

        <div className="demo-card-wide mdl-card mdl-shadow--2dp"
             style={{
                 background: 'url( https://image.tmdb.org/t/p/original/' + (backdrop_path) + ') center / cover',
                 backgroundColor: 'black'
             }}>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text" hidden={!title}>{title}</h2>
                <h2 className="mdl-card__title-text" hidden={!name}>{name}</h2>
            </div>
            <div className="mdl-card__supporting-text">
                <p className="overview">{overview}</p>
            </div>
            <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect close">
                    <i className="material-icons" onClick={updateMovieState}>close</i>
                </button>
            </div>
        </div>
    )
}

export default InfoCard;