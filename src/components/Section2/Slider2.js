import React from 'react'
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { useCart } from 'react-use-cart';

const Slider2 = (props) => {
  const { addItem } = useCart();
    //   const settings = {
   
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //       responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };

  return (
          <div className="container slider-section2 col-xl-3 col-lg-3 col-md-3  col-6">
        {/* <Slider {...settings}> */}

        
          <div className="item col-xl-12 col-md-12 " >
            <div className="item-content">
                <div className="img">
                    <img className="product-img"  src={props.img} alt="err" />
                </div>
                <a href="#/">{props.title}</a>
                <img src={props.rating} alt="err" />
                <span>{props.price}$</span>

                <div className="hover-box">
                    <div className="top">
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                        <a href="#/"><i class="far fa-heart"></i></a>
                    </div>
                    <div className="bottom" onClick={()=>addItem(props.item)}>
                    <a href="#/"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
          </div>
        
        </div>
        
        {/* </Slider> */}
      </div>
  )
}

export default Slider2

