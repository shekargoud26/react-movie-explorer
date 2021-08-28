import react from "react";

import { Wrapper } from "./LoadMore.styles";

const LoadMore = ({ text, onClick }) => {
    return (
        <Wrapper onClick={onClick}> {text} </Wrapper>
    );
};

export default LoadMore;