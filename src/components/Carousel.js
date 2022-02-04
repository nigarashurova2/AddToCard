import React from 'react'
import sliderImg1 from '../assets/image/slider-img-1.jpg';
import sliderImg2 from '../assets/image/slider-img-2.jpg';
import sliderImg3 from '../assets/image/slider-img-3.jpg';

const Carousel = () => {
    return (
        <div>
             <div className="homepage">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sliderImg1} className="d-block w-100" alt="err" />
            
            <div className="container">
            <div className="carousel-text ">             
                <h4 className="title">BLACK FRIDAY.</h4>
                <h1>Car Breake Pads Sale 50% Off</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit voluptas beatae esse cumque repellendus!</p>
                <button>SHOPPING NOW</button>
                </div>        
            </div>
         
            
          </div>
          <div className="carousel-item">
            <img src={sliderImg2} className="d-block w-100" alt="err" />
            <div className="container">
            <div className="carousel-text ">             
                <h4 className="title">BLACK FRIDAY.</h4>
                <h1>Car Breake Pads Sale 50% Off</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui fugit blanditiis, nesciunt magnam dignissimos?</p>
                <button>SHOPPING NOW</button>
                </div>        
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderImg3} className="d-block w-100" alt="err" />
            <div className="container">
            <div className="carousel-text ">             
                <h4 className="title">BLACK FRIDAY.</h4>
                <h1>Car Breake Pads Sale 50% Off</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas soluta laudantium nesciunt perferendis! Facilis?</p>
                <button>SHOPPING NOW</button>
                </div>        
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
        </div>
    )
}

export default Carousel
