import react, { useState, useEffect, useRef } from "react";

import searchIcon from "../../images/search-icon.svg"
import { Wrapper, Content } from "./SearchBar.styled";

const SearchBar = ({ setSearchTerm }) => {
    // individual state of the SearchBar
    const [state, setState] = useState("");
    const initialRender = useRef(true);

    // updating search term in global state
    useEffect(() => {
        // not setting serach term untill user enters data
        if(initialRender.current){
            initialRender.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon"/>
                <input type='text' placeholder="Search movie"
                    onChange={event => setState(event.target.value)}
                    value={state}/>
            </Content>
        </Wrapper>
    );
};


export default SearchBar;