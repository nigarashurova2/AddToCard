import React from 'react'
import logo from '../assets/image/logo-footer.png';
import img1 from '../assets/image/footer-img.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <div className="footer-top">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 col1">
                    <a href="#/" className="logo-img"> <img src={logo} alt="" /></a>
                    <div className="text">
                        <h6>Address</h6>
                        <span>4710-4890 Breckinridge St,Fayetteville</span>
                    </div>
                    <div className="text">
                        <h6>Need Help?</h6>
                        <span>Call: 1-800-345-6789</span>
                    </div>
                    <div className="text">
                        <h6>Products & Sales</h6>
                        <span>Call: 1-877-345-6789</span>
                    </div>
                    <a href="#/" className="button">Contact us</a>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-12 col2">
                    <div className="col2-top">
                    <h5 className="title">JOIN OUR NEWSLETTER</h5>
                    <p>Subscribe to receive inspiration, ideas and news in your inbox.</p>
                    <div className="input-box">
                        <input type="text" placeholder="Enter You Email Address Here" />
                        <i class="far fa-envelope"></i>
                    </div>
                    </div>
                    
                    <div className="followUs">
                        <h5 className="title-follow">FOLLOW US</h5>
                        <ul className="social-link">
                            <li><a href="#/"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="#/"><i class="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="#/"><i class="fab fa-google-plus"></i> Google</a></li>
                            <li><a href="#/"><i class="fab fa-youtube"></i> Youtube</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-12 col3">
                    <h5 className="title">EXTRAS</h5>
                    <div className="list">
                    <ul>
                        <li><a href="#/">About Us</a></li>
                        <li><a href="#/">Delivery Information</a></li>
                        <li><a href="#/">Privasy Policy</a></li>
                        <li><a href="#/">Terms & Conditions</a></li>
                        <li><a href="#/">Contact Us</a></li>
                        <li><a href="#/">Site Map</a></li>
                        <li><a href="#/">Order History</a></li>
                    </ul>

                    <ul>
                    <li><a href="#/">Brands</a></li>
                        <li><a href="#/">Gift Certificate</a></li>
                        <li><a href="#/">Affillite</a></li>
                        <li><a href="#/">Specials</a></li>
                        <li><a href="#/">Returns</a></li>
                    </ul>
                    </div>
                   
                </div>
            </div>
            </div>

            <div className="footer-center">
                <div className="first">
                    <h6>Free App: </h6>
                    <a href="#/" className="button1 button"><i class="fab fa-apple"></i> Apple Store</a>
                    <a href="#/" className="button2 button"><i class="fas fa-robot"></i> Apple Store</a>
                    </div>
                <div className="second">
                    <img src={img1} alt="err" />
                </div>
            </div>

            <div className="footer-bottom">    
                <a href="#/">Online Shopping</a>
                <a href="#/">Promotions</a>
                <a href="#/">Privacy Policy</a>
                <a href="#/">Site Map</a>
                <a href="#/">Orders and Returns</a>
                <a href="#/">Help</a>
                <a href="#/">Contact Us</a>
                <a href="#/">Support</a>
                <a href="#/">Most Populars</a>
                <a href="#/">New Arrivals</a>
                <a href="#/">Special Products</a>
                <a href="#/">Manufacturers</a>
                <a href="#/">Shipping Payments</a>
            </div>

           

            </div>
            
            <div className="footer-end">
                <p>Copyright © 2019 <span>PlazaThemes</span>. All Right Reserved.</p>
            </div>
            
           

        </div>
    )
}

export default Footer
