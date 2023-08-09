import {React,useState,useEffect} from 'react'
import axios from 'axios';
import MovieCard from '../movieCard/MovieCard';
import './toprated.css'

const TopRated = () => {
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=32bf24f3ab713486ef6bf6f5cf0ea18f&language=en-US&page=1"
        )
        .then((res) => {
          setTopRated(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
      <div className="toprated_container">
        <div className="toprated_heading">
          <div>
            <h1><strong>Top Rated Movies</strong></h1>
            <h5> Go Ahead, Make Your Day</h5>
          </div>
         
        </div>
        <div className="toprated_details">
          {topRated.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })}
        </div>
      </div>
    );
}

export default TopRated
