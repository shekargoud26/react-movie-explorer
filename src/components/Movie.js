import React from "react";
import { useParams } from "react-router";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// components
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import MovieInfo from "./MovieInfo";

import { useMovieFetch } from "../hooks/useMovieFetch";

import NoImage from '../images/no_image.jpg';
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

const Movie = () => {

    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    if (loading)
        return <Spinner />
    if (error)
        return <div>Something went wrong</div>

    return (
        <>
            <BreadCrumb title={movie.title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'
                children={
                    movie.actors.map(actor => (<Actor key={actor.credit_id} name={actor.name}
                        character={actor.character}
                        imageUrl={actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage} />))
                } />

        </>);
};

export default Movie;