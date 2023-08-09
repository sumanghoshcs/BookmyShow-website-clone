import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../movieCard/MovieCard";
import Carousel from "../crouselarr/Crouse"; // Update the path as needed
import buttonLogo from '../../Assets/play-icon-14-256-removebg-preview.png'
import "./premiermovie.css";

const PremierMovie = () => {
  const [premierMovies, setPremierMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=36893638a6794845683b94c4ac2d8344&language=en-US&page=1"
      )
      .then((res) => {
        setPremierMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Premier_Container">
      <div className="premier_heading">
        <div>
          <h1><strong>Premier Movies</strong></h1>
          <h5>Watch new Movies, every Friday</h5>
        </div>
        <img src={buttonLogo} alt="" className="button"/>
      </div>
      <div className="premier_details">
        <Carousel items={premierMovies.map((movie) => <MovieCard key={movie.id} {...movie} />)} />
      </div>
    </div>
  );
};

export default PremierMovie;
