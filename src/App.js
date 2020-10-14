import React, { useState } from "react";
import Header from "./components/header";
import MovieList from "./components/movieList";
import Filter from "./components/filter";
import AddMovie from "./components/addMovie";
import Footer from "./components/footer";

function App() {

    const [cardsInfo, setCardsInfo] = useState([
      {
        title: "Why so serious",
        rate: 1,
        imgSrc: "assets/whysoserious.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Avatar",
        rate: 2,
        imgSrc: "assets/avatar.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Inception",
        rate: 5,
        imgSrc: "assets/inception.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Twilight",
        rate: 3,
        imgSrc: "assets/twilight.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "The karate kid",
        rate: 4,
        imgSrc: "assets/karatekid.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Venom",
        rate: 5,
        imgSrc: "assets/venom.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Interstellar",
        rate: 4,
        imgSrc: "assets/interstellar.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Next",
        rate: 1,
        imgSrc: "assets/next.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Iron Man",
        rate: 4,
        imgSrc: "assets/ironman.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Jocker",
        rate: 5,
        imgSrc: "assets/jocker.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Pokemon",
        rate: 3,
        imgSrc: "assets/pokemon.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
      {
        title: "Aladin",
        rate: 2,
        imgSrc: "assets/aladin.jpg",
        description:
          "Enjoy the best streaming performance and full HD image quality",
        posterUrl: "https://www.netflix.com/tn-fr/",
      },
    ]);
    //filter with title
    const [title, setTitle] = useState("");
    const searchMovie = (e) => {
      e.preventDefault();
      setTitle(e.target.value);
    };
    //filter with rating
    const [clicked, setClicked] = useState(true);
    const [rate, setRate] = useState(0);
    const handleStarRating = (e) => {
      clicked ? setClicked(false) : setClicked(true);
      clicked || e.target.value !== rate ? setRate(e.target.value) : setRate(0);
    };

    return (
      <div>
        <Header />
        <Filter
          title={title}
          handleSearch={searchMovie}
          rate={rate}
          handleStarRating={handleStarRating}
        />
        <MovieList
          cardsInfo={
            Number(rate) && title.length > 0
              ? cardsInfo.filter(
                  (elm) =>
                    Number(elm.rate) >= Number(rate) &&
                    elm.title.match(new RegExp(`${title}`, "gi"))
                )
              : Number(rate)
              ? cardsInfo.filter((elm) => Number(elm.rate) >= Number(rate))
              : title.length > 0
              ? cardsInfo.filter((elm) =>
                  elm.title.match(new RegExp(`${title}`, "gi"))
                )
              : cardsInfo
          }
        />
        <AddMovie cardsInfo={cardsInfo} setCardsInfo={setCardsInfo} />
        <br />
        <Footer />
      </div>
    );
}

export default App
