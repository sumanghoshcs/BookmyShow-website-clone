import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import './movieDetails.css';
import offer from '../Assets/BookMyShow_HalfPrice_offer_11Feb.jpg'
import axios from 'axios';
import MovieCard from '../components/movieCard/MovieCard';
import Footer from "../components/footer/Footer";
import { useContext } from 'react';
import movieContext from '../Context/movieContext';
import { Link } from 'react-router-dom';
import userContext from '../Context/userContext';

const MovieDetailPage = () => {

  
  //fetching data for showing extra recommendation.
  const [extraRecomm,setExtra] = useState([]);
  const extra5 = ['popular','top_rated','upcoming'];
  useEffect(() => {
    let choice = Math.floor(Math.random()*3);
    let cc = extra5[choice];
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${cc}?api_key=32bf24f3ab713486ef6bf6f5cf0ea18f&language=en-US&page=1`
      )
      .then((res) => {
        setExtra(res.data.results);
        SettingRecommendation(extraRecomm);
      })
      .catch((err) => {
        console.log(err);
      });
      // eslint-disable-next-line
  }, []);

  function SettingRecommendation(extraRecom){
      for(let i=0;i<4;i++){
        let ran = Math.floor(Math.random()*20);
        extra5.push(extraRecom[ran]);
      }
  }

  function addToWishlist(){
    let repeat = false;
      wishListData.map((movie)=>{
          if(movie.title === movieState.title){
            console.log("Already Exists")
            repeat = true;
          }
      })
        if(repeat === false){
          setWishListData([...wishListData,movieState])
        }
    }

   
   
  
    //Using context api to spread the current movie data
    const {movieState} = useContext(movieContext);
    const{wishListData,setWishListData} = useContext(userContext);

  useEffect(()=>{
    setTimeout(()=>{
      console.log(wishListData);
    },5000)
  },[wishListData])

  
  return (
    <div id='main'>
      <Navbar/>
      {/* ================================================================================================ */}
      <div className='movie_poster_and_details'  style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${movieState.backdrop_path})`}}>
        <div className='i'><img src={movieState.poster_path} alt="" className='imageSpace'/></div>
        <div className='details_space'>
          <div className='titleOfMovie space'>
            <h1><strong>{movieState.title}</strong></h1></div>
          <div className='ratings space'><h3>Ratings : <strong>{movieState.vote_average}/10</strong></h3></div>
          <div className='wishList space'><button className='btn btn-danger wishlistbtn' onClick={addToWishlist}>Add to Wishlist</button></div>
          <div className='language space'><h3><strong>Language: 2D Hindi, English</strong></h3></div>
          <div className='category space'><h4>2h 1m - UA </h4></div>
          <div className='bookingButton space'> <Link to="/seat_selection"><button className='btn btn-danger'>Book Tickets</button></Link></div>
        </div>
      </div>
    {/* ============================================================================================================ */}
      <div className='aboutMovie'>
        <h2><strong>About the movie</strong></h2>
        <h4>{movieState.overview}</h4>
      </div>
    {/* ================================================================================================================ */}
      <div className='offers'>
        <h2><strong>Top Offers For You</strong></h2>
        <div ><img src={offer} alt="" className='offerImage'/></div>
      </div>
   
      {/* ========================================================================================================================== */}
      <div className='extraRecommendation'>
        <h1>You might also like</h1>
        <div className='extraRecommendationMovieCards'>
        {extraRecomm.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
        </div>
      </div>  
    {/* ================================================================================================================================= */}
    <div>
      <Footer/>
    </div>
      </div>
  )
}

export default MovieDetailPage
