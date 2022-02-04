import React from 'react'
import Img1 from '../assets/image/section3-img-1.jpg';
import Img2 from '../assets/image/section3-img-2.jpg';

const Section3 = () => {
    return (
        <div className="section3">
            <div className="container">
                <div className="section3-content">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 img-box">
                            <div className="img">
                            <img src={Img1} alt="err" />
                            </div>
                       
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 img-box">

                        <div className="img">
                            <img src={Img2} alt="err" />
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
