import react from "react";

import { Image } from "./Thumbnail.styles";

const Thumbnail = ({image, movieId, clickable}) => {
return (
    <Image src={image} alt='movie thumbnail'></Image>
);
};

export default Thumbnail;