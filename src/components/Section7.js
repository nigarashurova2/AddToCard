import React from 'react'
import img1 from '../assets/image/section7-img-1.png';
import img2 from '../assets/image/section7-img-2.png';
import img3 from '../assets/image/section7-img-3.png';
import img4 from '../assets/image/section7-img-4.png';
import img5 from '../assets/image/section7-img-5.png';
import img6 from '../assets/image/section7-img-6.png';

const Section7 = () => {
    return (
        <div className="section7">
            <div className="container">
               <div className="row">
                   
                   <div className="col-xl-2 col-lg-2 col-md-3 col">
                       <img src={img1} alt="err" />
                   </div>
                   <div className="col-xl-2 col-lg-2 col-md-3 col">
                   <img src={img2} alt="err" />
                   </div>
                   <div className="col-xl-2 col-lg-2 col-md-3 col">
                   <img src={img3} alt="err" />
                   </div>
                   <div className="col-xl-2 col-lg-2 col-md-3 col">
                   <img src={img4} alt="err" />
                   </div>
                   <div className="col-xl-2 col-lg-2 col-md-3 col">
                   <img src={img5} alt="err" />
                   </div>
                   <div className="col-xl-2 col-lg-2 col-md-3 col">
                   <img src={img6} alt="err" />
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Section7
