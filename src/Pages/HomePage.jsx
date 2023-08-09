import { React, useContext, useEffect } from "react";
// import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/Menu/Menu";
import Entertainment from "../components/entertainment/Entertainment";
import Carosel from "../components/carosel/Carosel";
import EventStream from "../components/onlyPosters/EventStream";
import Footer from "../components/footer/Footer";
import Recommovie from "../components/recommended movie/Recommovie";
import PremierMovie from "../components/premierMovie/PremierMovie";
import ClonePoster from "../components/onlyPosters/ClonePoster";
import TopRated from "../components/topRatedmovie/TopRated";
import userContext from "../Context/userContext";

const HomePage = () => {

  const{ setUserStatus} = useContext(userContext)

  useEffect(()=>{
    
    if(localStorage.getItem("userEmail") !== null && localStorage.getItem("password")!== null){
      setUserStatus(true);
    }
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <Navbar />
      <Menu />
      <Carosel />
      <Recommovie/>
      <EventStream />
      <Entertainment />
      <PremierMovie/>
      <Footer />
    </div>
  );
};

export default HomePage;
