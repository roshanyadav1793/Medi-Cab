import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './carousel.css';

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      Animation:1,
      slidesToScroll: 1
    };
    return (
        <div id="Ca_main">
            <div id="Ca_main_section1">
            <Slider {...settings}>
                <div>
                    <img src={img1} id="Ca_img" />
                </div>
                <div>
                    <img src={img2} id="Ca_img" />
                </div>
                <div>
                    <img src={img3} id="Ca_img" />
                </div>
                <div>
                    <img src={img1} id="Ca_img" />
                </div>                
            </Slider>
            </div>
        </div>
     
    );
  }