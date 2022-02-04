import React from 'react'
import Carousel from './Carousel';
import Section1 from './Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3';
import Section4 from './Section4/Section4';
import Section6 from './Section6/Section6';
import Section7 from './Section7';

const Home = () => {
    return (
       <div>
         <Carousel />
         <Section1 />
         <Section2 />
         <Section3 />
         <Section4 />
         <Section6 />
         <Section7 />
       </div>
    )
}

export default Home
