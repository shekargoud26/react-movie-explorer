import React from "react";

import { Wrapper, Content, Text } from './MovieInfo.styles';
// components
import Thumbnail from '../Thumbnail/index';

// configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({ movie }) => {
    console.log(movie);
    return (
        <Wrapper backdrop={movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` : NoImage}>
            <Content>
                <Thumbnail
                    image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                    movieId={movie.id} clickable={false} />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3> PLOT </h3>
                    <p>{movie.overview}</p>
                    <div className='rating-directors'>
                        <div  >
                            <h3>RATING </h3>
                            <div className='score'> {movie.vote_average} </div>
                        </div>
                        <div className='director'>
                            <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie.directors.map(dir => (
                                <p key={dir.credit_id}>{dir.name}</p>
                            ))}
                        </div>
                    </div>

                </Text>
            </Content>
        </Wrapper >
    );
};

export default MovieInfo;