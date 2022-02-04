import React from 'react'
import Slider1 from './Slider1';
import Slider2 from './Slider2';
const Section4 = () => {
    return (
        <div className="section4">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                    <div className="title">
                    <h4><b>THIS WEEK’S</b> HOT DEALS</h4>
                    </div>
                    <Slider1 />
                    </div>

                    <div className="col-xl-4 col-lg-4  col-md-12 col-12">
                    <div className="title">
                    <h4><b>BEST</b> SELLERS</h4>
                    </div>
                    <Slider2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
