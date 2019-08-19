import React, { useState, useEffect } from 'react';
import axios from "axios";
import config from '../config'
import { Waypoint } from 'react-waypoint';
import Card from "./Card";
import InfoCard from './InfoCard';
import {useSelector} from "react-redux";
import '../style/list.css';


function PostList(props){

        //State
        const [posts, setPosts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [currentSearchAlgorithm, setCurrentSearchAlgorithm] = useState(null);
        const [currentSearchInput, setCurrentSearchInput] = useState(null);
        //Variables from redux store
        const searchAlgorithm = useSelector(state => state.search.searchAlgorithm);
        const searchInput = useSelector( state => state.search.searchInput);
        const selectedMovie = useSelector( state => state.movies.selectedMovie);

        const postCards = posts.map(post => (<Card post={post} key={post.id}/>));

        useEffect(()=> {
            if( searchAlgorithm !== currentSearchAlgorithm && searchAlgorithm !== null){
                setPosts([]);
                fetchPostsByChosenAlgorithm(searchAlgorithm, 1);
            }
            if( searchInput !== currentSearchInput ){
                setPosts([]);
                fetchPostsBySearchInput(searchInput, 1)
            }
        }, );



    return(
            <div>
                <div hidden={!selectedMovie}>
                <InfoCard/>
                </div>
            <div className="mdl-grid" hidden={selectedMovie}>
                {postCards}
                <Waypoint
                    onPositionChange={console.log("menuchoosen")}
                    onEnter={searchAlgorithm?() => fetchPostsByChosenAlgorithm(searchAlgorithm, currentPage):null}
                />
            </div>
            </div>
        );


     async function fetchPostsByChosenAlgorithm(searchParam, currentPage){
         setCurrentSearchAlgorithm(searchAlgorithm);
            if( searchParam ){
             await axios.get('https://api.themoviedb.org/3' + searchParam + '?api_key=' + config.API_KEY + '&page=' + currentPage)
                 .then(res => {
                     const nextPosts = res.data.results;
                     setCurrentPage(currentPage + 1);
                     setPosts( (currentState) => currentState.concat(nextPosts) )
                 }).catch(error => console.log(error))
            }
     }

     async function fetchPostsBySearchInput(searchInput, currentPage) {
         setCurrentSearchInput(searchInput);
         if( searchInput ){
             await axios.get('https://api.themoviedb.org/3/search' + props.location.pathname + '?api_key=' + config.API_KEY + '&query=' + searchInput)
                 .then( res => {
                     const nextPosts = res.data.results;
                     setCurrentPage(currentPage + 1);
                     setPosts( (state) => state.concat(nextPosts))
                 }).catch( error => console.log(error))
         }


     }

}


export default PostList;