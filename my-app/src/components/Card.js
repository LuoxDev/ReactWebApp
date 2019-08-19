import React from 'react';
import '../style/card.css';
import {useDispatch} from "react-redux";

function Card(props){

    const dispatch = useDispatch();


    function UpdatedGetMovie(post) {
        dispatch({
            type: 'GET_MOVIE',
            payload: post
        })
    }

    return (
        <div className="mdl-cell mdl-cell--2-col" onClick={() => UpdatedGetMovie(props.post)} hidden={!props.post.poster_path}>
            <div className="demo-card-image mdl-card mdl-shadow--2dp" style={{
                background: 'url( https://image.tmdb.org/t/p/w300/' + (props.post.poster_path) + ') center / cover',
                backgroundColor: 'black'
            }}>
                <div className="mdl-card__title mdl-card--expand"></div>
                <div className="mdl-card__actions">
                    <span
                        className="demo-card-image__filename">{props.post.title ? props.post.title : props.post.name}</span>
                </div>
                <div className="mdl-card__menu">
                    <div className={`
                                    ${props.post.vote_average >= 7.5 ? 'good' : ''}
                                    ${props.post.vote_average >= 5.5 && props.post.vote_average < 7.5 ? 'average' : ''}
                                    ${props.post.vote_average < 5.5 ? 'bad' : ''}
                                    `}>
                        <div className="rating_number material-icons">
                            {props.post.vote_average}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Card;