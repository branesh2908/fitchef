import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from'./components/Navbar';
import Swiper from './Swiper/swiper';
import TopRest from './components/TopRestaurant';
import PopRest from './components/PopRestaurant';
import Footer from './components/Footer';

function App () {
  return (
    <>
    <Navbar/>
    <Swiper/>
    <TopRest/>
    <PopRest/>
    <Footer/>
      {/* <Router>
        <Navbar></Navbar>
        <Routes>
         <Route path="./Swiper/swiper" element={<Swiper/>} />
          <Route path="/" element={<TopRest/>} />
          <Route path="/" element={<PopRest/>} />
          <Route path="/" element={<Footer/>} />
        </Routes>
      </Router> */}
   </>
  );
}
export default App;