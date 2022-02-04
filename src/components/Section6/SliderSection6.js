import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from '../../assets/image/section6-image/product1.jpg';
import product2 from '../../assets/image/section6-image/product2.jpg';
import product3 from '../../assets/image/section6-image/product3.jpg';
import product4 from '../../assets/image/section6-image/product4.jpg';
import product5 from '../../assets/image/section6-image/product5.jpg';


export default class SimpleSlider extends Component {
  render() {
    const settings1 = {
   
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container slider-section6">
        <Slider {...settings1}>
          <div className="item" >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={product1} alt="err" />
                </div>
                <a href="#/" className="title-link">Lorem ipsum dolor sit amet consectetur?</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam?</p>
                <button>Read More</button>


            </div>
          </div>

          <div className="item" >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={product2} alt="err" />
                </div>
                <a href="#/" className="title-link">Lorem ipsum dolor sit amet consectetur?</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam?</p>
                <button>Read More</button>

            </div>
          </div>

          <div className="item" >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={product3} alt="err" />
                </div>
                <a href="#/" className="title-link">Lorem ipsum dolor sit amet consectetur?</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam?</p>
                <button>Read More</button>

            </div>
          </div>

          <div className="item" >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={product4} alt="err" />
                </div>
                <a href="#/" className="title-link">Lorem ipsum dolor sit amet consectetur?</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam?</p>
                <button>Read More</button>

            </div>
          </div>

          <div className="item" >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={product5} alt="err" />
                </div>
                <a href="#/" className="title-link">Lorem ipsum dolor sit amet consectetur?</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam?</p>
                <button>Read More</button>

            </div>
          </div>

         

          
        </Slider>
      </div>
    );
  }
}
