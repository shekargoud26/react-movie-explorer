import { useState, useEffect } from "react";

import API from '../API';
import { isPersistedState } from "../helpers";

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
        // checking if the movie details exists in session
        const movie = isPersistedState(movieId);
        if(movie) {
            console.log('Fetching movie details from session');
            setState(movie);
            setLoading(false);
            return;
        }

        fetchData(movieId);
    }, [movieId]);

    // hook to save movie details to session
    useEffect(() => {
        sessionStorage.setItem(String(movieId), JSON.stringify(state))
    }, [movieId, state]);
    return {state, loading, error};
};