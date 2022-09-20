import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const { Meta } = Card;

const data = [
  {
   imageUrl: "./images/f9.png",
  },
  {
    id: 2,
   },
   {
    id: 3,
   },
   {
    id: 4,
   },
   {
    id: 5,
   },
   {
    id: 6,
   },   
]

const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo-img" src="./images/f-icon.png" alt='logo' />
            <span class="nav-link active logo-h" aria-current="page" href="#">FITCHEF</span>
          </a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </li>
              <li class="input-group">
                <div class="input-group">
                  <input type="search" class="form-control rounded" placeholder="Search for area,street name" aria-label="Search" aria-describedby="search-addon" />
                </div>
              </li>
            </ul>
          </div>
          <form class="d-flex ">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle btn-dropdown" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                SIGNIN
              </button>
              <ul class="dropdown-menu btn-dropdown list-dropdown" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" type="button">SIGNUP</button></li>
                <li><button class="dropdown-item" type="button">LOGIN</button></li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    <Swiper
     modules={[Navigation, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    { data.map( user => (
      <SwiperSlide key={user.id} className="slide">
        <div className='slide-content'>
          <div>
            <img src="./images/o2.jpg" alt="example" className='card-image' />
          </div>
        </div>      
      </SwiperSlide>
    ))}
  </Swiper>
    
    <h1>Top Restaurant</h1><div className='top-rest'>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/client1.jpg" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/client2.jpg" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/f1.png" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/f2.png" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/f3.png" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
      </div><h1>Popular Restaurant</h1><div className='pop-rest'>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/f4.png" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./images/f5.png" />}>
          <Meta title="Palm Shore" description="www.instagram.com" />
        </Card>,
      </div><div class="bg-dark text-center text-white">
        <div class="footer mt-auto pt-3">
          <section class="mb-4">
          </section>
          <section class="">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-3 text-center">
                <img class="fot-log" src="./images/f-icon.png" />
                <h5 class="text-white">FITCHEF</h5>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-2 text-left">
                <h5 class="text-white mb-4">PAGES</h5>
                <ul class="list-unstyled quick-links mb-2">
                  <li>
                    <a href="#!" class="text-white">Home</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">All Restaurants</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Cart</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                <h5 class="text-white mb-4">POLICY</h5>

                <ul class="list-unstyled quick-links mb-2">
                  <li>
                    <a href="#!" class="text-white">Terms of Usage</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Cancellation Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                <h5 class="text-white"> SUBSCRIBE</h5>
                <div class="row d-flex justify-content-center">
                  <p class="pt-2">
                    <p>Subscribe to our<br />
                      newsletter, so that you can<br />
                      be the first to know about<br />
                      new offers and<br />
                      promotions.</p>
                  </p>
                  <div class="input-group mb-3">
                    <input type="email" id="form5Example21" class="form-control nav-email" aria-label="Email"
                      placeholder="Enter Email" aria-describedby="button-addon2" />
                    <button type="button" class="btn btn-outline-secondary text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div></>
);
}
export default App;