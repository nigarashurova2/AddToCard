import React from 'react'
import img1 from '../assets/image/en-gb.png';
import logo from '../assets/image/logo (1).png';
import photoIcons from '../assets/image/icon_header_phone.png'
import {Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';


const Header = () => {

    const{totalItems, cartTotal}=useCart();

    return (
        <header>
           
                <div className="header-top">
                    <div className="container">
                    <div className="left">
                        <h6>WELCOME TO SHARMA ONLINE SHOPPING STORE !</h6>
                        <span>FOLLOW US:</span>
                        <ul>
                            <li><a href="#/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#/"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#/"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#/"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <a href="#/"><i class="fas fa-user"></i>  MY ACCOUNT  <i class="fas fa-angle-down"></i></a> <span>|</span>
                        <a href="#/">
                            <img src={img1} alt="err" />
                            EN-GB  <i class="fas fa-angle-down"></i></a> <span>|</span>
                        <a href="#/">$ USD  <i class="fas fa-angle-down"></i></a> <span>|</span>
                    </div>
                </div>
            </div>

            <div className="header-center">
            <div className="nav-center">
                <div className="container">
                    <div className="menu-bar">
                    <i class="fas fa-bars"></i>
                    </div>
                   <div className="logo">
                       <a href="#/"><img src={logo} alt="err" /></a>
                   </div>

                   <div className="input-content">
                           <input type="text" placeholder="Search entire store here ..." />
                           <button><i class="fas fa-search"></i></button>
                    </div>

                    <div className="nav-left">
                        <div className="heart ">
                        <i class="far fa-heart"></i>
                        <span>0</span>
                        </div>                 
                      <Link to="/Cart"  className="cart">
                     <i class="fas fa-shopping-cart"></i> 
                        <span>({totalItems})</span>     
                     </Link>

                     <div className="money">
                         <span>${cartTotal}</span>
                     </div>
                    </div>

                </div>    
            </div>
                
            </div>

            <div className="header-bottom">
                <div className="container">
                    <nav>
                        <div className="nav-bar">
                        <div className="nav-title">
                            <a href="#/"><i class="fas fa-stream"></i>  Browse categories  <i class="fas fa-angle-down icon"></i></a>                                    
                        </div>
                        <div className="nav-links">
                            <ul>
                                <li><NavLink to="/"  >Home</NavLink></li>
                                <li><NavLink to="/Shop">Shop  <i class="fas fa-angle-down icon"></i></NavLink></li>
                                <li><a href="#/">Tools <i class="fas fa-angle-down icon"></i></a></li>
                                <li><a href="#/">Contact Us</a></li>
                                <li><a href="#/">Specials</a></li>
                                <li><a href="#/">Blog</a></li>
                            </ul>
                        </div>
                        </div>

                        <div class="header-phone">
                           <img src={photoIcons} alt="" />
                            <p >(088) 123 4567</p>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
        
    )
}

export default Header
