import React, { useState } from "react";
import MovieContext from "./movieContext";

const MovieState = (props) => {
  const [movieState, setMovieState] = useState({});
  return (
    <MovieContext.Provider value={{ movieState, setMovieState }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
