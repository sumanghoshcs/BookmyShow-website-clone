
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AllMovie from './Pages/AllMovie';
import MovieDetailPage from './Pages/MovieDetailPage';
import SeatBooking from './Pages/SeatBooking';
import PaymentPage from './Pages/PaymentPage';
import WishList from './Pages/WishList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/all_movies' element={<AllMovie/>}></Route>
        <Route path='/movie_details' element={<MovieDetailPage/>}></Route>
        <Route path='/seat_selection' element={<SeatBooking/>}></Route>
        <Route path='/payment_page' element={<PaymentPage/>}></Route>
        <Route path='/wishList' element={<WishList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
