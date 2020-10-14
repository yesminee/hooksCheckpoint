import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";

const MovieCard = ({ title, description, posterUrl, rate, imgSrc }) => {
    let rateDiv = [];
    for (let i = 0; i < rate; i++) {
        rateDiv.push(<BsStarFill color="yellow" key={i} />);
    }

    return (
      <div className="box">
        <Card
          style={{ width: "18rem", margin: 10, backgroundColor: "#d9d9d9" }}
          className="text-center text-white "
        >
          <Card.Header style={{ color: "#4a3f4d" }}>
            {title}
            <br />
            {rateDiv}
          </Card.Header>
          <Card.Body>
            <Card.Img src={imgSrc} style={{ height: 280 }} />
            <Card.Text style={{ color: "#4a1a57" }}>{description}</Card.Text>
            <Button variant="primary" href={posterUrl} target="_blank">
              Watch Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default MovieCard;