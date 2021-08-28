import React from "react";

import { Content, Wrapper, Text } from "./Banner.styles";

import { IMAGE_BASE_URL, BACKDROP_SIZE  } from "../../config";



const Banner = ({movie}) => {
    let imageUrl = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`;
    return (
        <Wrapper image={imageUrl}>
            <Content>
                <Text>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                </Text>
            </Content>
        </Wrapper>
    );
};


export default Banner;