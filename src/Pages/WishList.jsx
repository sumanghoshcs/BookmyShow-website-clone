import React from "react";
import Navbar from "../components/navbar/Navbar";
import userContext from "../Context/userContext";
import { useContext } from "react";
import MovieCard from "../components/movieCard/MovieCard";

const WishList = () => {
  
  const{wishListData,setWishListData} = useContext(userContext);
  // function removeCard(e){
  //     console.log(e.target.id);
  // }

  const handleDelete = (e) => {
    const tit = e.target.id;
    const newData = wishListData.filter((obj) => obj.title !== tit);
    setWishListData(newData);
  };

  return (
    <div>
      <Navbar />
      <div style={{display:"flex",justifyContent:'center',padding:'1rem',margin:'0.5rem 0.5rem 0rem 0.5rem'}}>
        <h1>Your Wish List</h1>
      </div>
      <div style={{display:"flex",justifyContent:'center',padding:'1rem',flexWrap:'wrap'}}>
        {wishListData.length !==0 ? <div style={{display:'flex',margin:'1rem',padding:'1.5rem',justifyContent:'space-evenly',flexWrap:'wrap'}}>

        {wishListData.map((movie, index) => {
            return<div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <div> <MovieCard key={index} {...movie} /></div>
              <div style={{display:'flex',justifyContent:'center'}}><button  className="btn btn-danger" id={movie.title} onClick={handleDelete}>Remove</button></div>
            </div>
          })}

        </div>:<h1>No movies added</h1>}
      </div>
    </div>
  );
};

export default WishList;
