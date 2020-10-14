import React from "react";
import MovieCard from "./movieCard";
import { CardGroup } from "react-bootstrap";
const MovieList = ({ cardsInfo }) => {
    return (
        <CardGroup style={{ justifyContent: "center" }}>
            {cardsInfo.map((elm) => (
                <MovieCard
                    title={elm.title}
                    rate={elm.rate}
                    imgSrc={elm.imgSrc}
                    description={elm.description}
                    posterUrl={elm.posterUrl}
                    key={elm.id}
                />
            ))}
        </CardGroup>
    );
};
export default MovieList;
