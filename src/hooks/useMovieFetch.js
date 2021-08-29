import { useState, useEffect } from "react";

import API from '../API';

export const useMovieFetch = (movieId) => {
    // initializing states
    const [state, setState] = useState({ });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    
    // initializing Movie Component
    useEffect(() => {
        const fetchData = async (movieId) => {
            try {
                setLoading(true);
                setError(false);
                // fetch movie details
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const directors = credits.crew.filter(member => member.job === 'Director');
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });
    
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData(movieId);
    }, [movieId]);

    return {state, loading, error};
};