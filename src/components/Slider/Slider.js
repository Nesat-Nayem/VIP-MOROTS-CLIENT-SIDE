import React from 'react';
import SliderMain from '../SliderMain/SliderMain';
import './Slider.css'
const Slider = () => {
    return (
        <div className="header-container mb-5">        
            <SliderMain></SliderMain>
            <h1 className="text-center color-3 my-5">Explore Your Dream Car</h1>
        </div>
    );
};

export default Slider;