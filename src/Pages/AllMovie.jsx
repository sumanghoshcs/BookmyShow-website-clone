import React, { useEffect, useState } from "react";
import "./allmovie.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import MovieCard from "../components/movieCard/MovieCard";

const AllMovie = () => {
  //array to store fetched data
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  //for changing the url to fetch the movie data
  const [movieType, setMovieType] = useState("popular");
 

  //every time the movietype will change we will fetch the data again
  useEffect(() => {
    setLoading(true);
    setFilteredData([]);
    setTimeout(()=>{
        axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieType}?api_key=32bf24f3ab713486ef6bf6f5cf0ea18f&language=en-US&page=1`
        )
        .then((res) => {
          setFilteredData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    },1000)
  }, [movieType]);

  return (
    <div>
      <Navbar />
      <div className="filterMovies">
        <div>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setMovieType(e.target.value);
            }}
          >
            <option value="popular">popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Premier</option>
            <option value="now_playing">Latest</option>
          </select>
        </div>
        <div>
        </div>
        
      </div>
      <div className="filteredMovieContainer">
        {loading && <h1>Loading.....</h1>}
        {movieType &&
          filteredData.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })}
      </div>
    </div>
  );
};

export default AllMovie;
