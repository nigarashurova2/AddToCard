import React from 'react'
import Slider from './Slider2';
import data from '../Data/Section2Data';

const Section2 = () => {
    return (
        <div className="section2">
            <div className="container">
                <div className="title">
                    <h4><b>NEW</b> ARRIVALS</h4>
                </div>


                <div className="row section-2-product">
                {data.productData.map( (item,index)=>{
                    return(
                        <Slider img={item.img}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        item={item}
                        key={index}
                        /> 
                    )
                })}
                </div>
                
               
            
            </div>
        </div>
    )
}

export default Section2

