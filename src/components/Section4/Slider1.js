import React, { Component } from "react";
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product5 from '../../assets/image/product8.jpg';
import product3 from '../../assets/image/product2.jpg';
import product2 from '../../assets/image/product3.jpg';
import product4 from '../../assets/image/product4.jpg';
import product1 from '../../assets/image/product5.jpg';
// import product6 from '../../assets/image/product6.jpg';
// import product7 from '../../assets/image/product7.jpg';
// import product8 from '../../assets/image/product8.jpg';

// import { useCart } from 'react-use-cart';

export default class SimpleSlider extends Component {
  render() {
    // const { addItem } = useCart();
    const settings1 = {
   
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
      <div className="container slider-section6 slide1">
        <Slider1 {...settings1}>
          <div className="item" >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={product1} alt="err" />
                </div>
                <a href="#/" className="title-link">Lorem ipsum dolor sit amet consectetur?</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam?</p>
                <button>Read More</button>
                <div className="hover-box">
                    <div className="top">
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                    </div>
                    <div className="bottom" >
                    {/* onClick={()=>addItem(this.item)} */}
                    <a href="#/"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>

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
                <div className="hover-box">
                    <div className="top">
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                    </div>
                    <div className="bottom" >
                    <a href="#/"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
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

                <div className="hover-box">
                    <div className="top">
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                    </div>
                    <div className="bottom" >
                    <a href="#/"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>

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
                <div className="hover-box">
                    <div className="top">
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                    </div>
                    <div className="bottom" >
                    <a href="#/"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>

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

         

          
        </Slider1>
      </div>
    );
  }
}