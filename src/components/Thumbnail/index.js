import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable }) => {
    return (
        <div>
            {clickable ?
                (<Link to={`/${movieId}`}>
                    <Image src={image} alt='movie thumbnail'></Image>
                </Link>)
                : (<Image src={image} alt='movie thumbnail'></Image>)}
        </div>

    );
};

export default Thumbnail;