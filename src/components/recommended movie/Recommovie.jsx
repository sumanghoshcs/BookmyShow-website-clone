import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../movieCard/MovieCard';
import { Link } from 'react-router-dom';
import Carousel from '../crouselarr/Crouse'; // Update the path as needed
import './recommmovie.css';

const Recommovie = () => {
  const [recommendedMovies, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=36893638a6794845683b94c4ac2d8344&language=en-US&page=1"
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="recomm_movie_container">
      <div className="heading">
        <h2>
          <strong>Recommended Movies</strong>
        </h2>
        <h5 className="seeAll">
          <strong>
            <a href="/">
              <Link to="/all_movies">See All</Link>
            </a>
            &gt;
          </strong>
        </h5>
      </div>
      <div className="movieCardSection">
        <Carousel
          items={recommendedMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        />
      </div>
    </div>
  );
};

export default Recommovie;
