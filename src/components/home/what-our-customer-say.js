import React from "react"
import { Link } from "gatsby"

import Slider from "react-slick";
var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const WhatOurCustomerSay = () => (
    <div className="Testimonial pt-5 pb-5">
   
    <div> 
            {/* <div className="container"><h2 className="mb-5">What Our Customer Say</h2></div>
            
           <div className="container">
           <Slider {...settings}>
                <div className="media">
                    <img className="mr-3" src="images/avatar_g2.jpg" alt="Generic placeholder image" style={{width:'100px'}}/>
                    <div className="media-body">'
                        <p><i className="fas fa-quote-left"></i> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                        <h5 className="d-inline-block">Trushant</h5> 
                        <span className="font-14"> , Media Analyst</span>
                    </div>
                </div>
                <div className="media">
                    <img className="mr-3" src="images/avatar_g2.jpg" alt="Generic placeholder image" style={{width:'100px'}}/>
                    <div className="media-body">'
                        <p><i className="fas fa-quote-left"></i> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                        <h5 className="d-inline-block">Trushant</h5> 
                        <span className="font-14"> , Media Analyst</span>
                    </div>
                </div>
                </Slider>
            </div> */}
            
            
      </div>
           

        </div>
   
)

export default WhatOurCustomerSay
