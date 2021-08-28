import { useState, useEffect } from "react";

import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

const useHomeFetch = () => {
    // initializing states
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page = 1, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prevState => ({
                ...movies,
                results: page > 1 ? [...prevState.results, ...movies.results] : [...movies.results]
            }));
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    };
    // search
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);
    // load more effect
    useEffect(() => {
        if (!isLoadingMore)
            return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, state.page, searchTerm]);

    return { state, loading, error, searchTerm, setSearchTerm, isLoadingMore, setIsLoadingMore };
}

export default useHomeFetch;