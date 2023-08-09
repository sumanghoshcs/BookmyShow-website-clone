import { React} from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import movieContext from "../../Context/movieContext";

function getPosterUrl(poster_path) {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
}
function getBackdropUrl(backdrop_path){
  return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
}
const MovieCard = (props) => {

  //Using context api to update the current movie data 
  // eslint-disable-next-line
  const {movieState,setMovieState} = useContext(movieContext);

  // eslint-disable-next-line
  const { poster_path, title, vote_average, backdrop_path, overview } = props;

  const arr =  {poster_path:`${getPosterUrl(poster_path)}`,
                title:`${title}`,
                vote_average:`${vote_average}`,
                overview:`${overview}`,
                backdrop_path:`${getBackdropUrl(backdrop_path)}`
  }
  //onclick func
  function updateData() {
    setMovieState(arr);
    
  }


  return (
    <div className="movieCardM">
      <div className="image_detail_container">
        
        <Link to='/movie_details'>
        <img
          src={getPosterUrl(poster_path)}
          alt={title}
          className="recom_movie"
          onClick={updateData}
        />
        </Link>

        <h5 className="detail">
          <strong>{title}</strong>
        </h5>
        <h5 className="detail">
          <strong> Ratings: {vote_average}</strong>
        </h5>
      </div>
    </div>
  );
};

export default MovieCard;
