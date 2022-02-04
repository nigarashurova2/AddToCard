import React from 'react';
import img1 from '../assets/image/section1-Img1.png';

const Section1 = () => {
    return (
        <div className="section1">
            <div className="container">
                <div className="row section1-content">

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 box">
                        <div className="img-content">
                            <img src={img1} alt="err" />
                        </div>

                        <div className="text">
                            <h6>Free Shipping</h6>
                            <p>Free shipping on all US order</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 box">
                        <div className="img-content">
                            <img src={img1} alt="err" />
                        </div>

                        <div className="text">
                            <h6>Support 24/7</h6>
                            <p>Contact us 24 hours a day</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 box">
                        <div className="img-content">
                            <img src={img1} alt="err" />
                        </div>

                        <div className="text">
                            <h6>100% Money Back</h6>
                            <p>You have 30 days to Return</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 box">
                        <div className="img-content">
                            <img src={img1} alt="err" />
                        </div>

                        <div className="text">
                            <h6>Payment Secure</h6>
                            <p>We ensure secure payment</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1

