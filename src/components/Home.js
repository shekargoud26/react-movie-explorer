import React from "react";
// configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import API from '../API';
// components
import Header from "./Header";
import Banner from "./Banner";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import LoadMore from "./LoadMore";
// Hooks
import useHomeFetch from "../hooks/useHomeFetch";
// images
import NoImage from '../images/no_image.jpg';


const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, isLoadingMore, setIsLoadingMore } = useHomeFetch();
    console.log(state, error, loading);
    return <>
        <Header />
        {!searchTerm && state.results[0] ? <Banner movie={state.results[0]} /> : null}
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={searchTerm ? searchTerm : "Popular movies"}>
            {state.results.map(movie => {
                return <Thumbnail key={movie.id}
                    clickable
                    image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                    movieId={movie.id}
                />
            })}
        </Grid>
        {!isLoadingMore ? <LoadMore text="Load more" onClick={() => setIsLoadingMore(true)} /> : <Spinner />}
    </>;
}

export default Home;