import React from 'react';
import Slider from 'react-slick';

const PhotoSlider = ({collection}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        initialSlide: 2,
    };

    return (
        <div className="frame">
            <Slider {...settings}>
                {collection.map((photo, index) => (
                    <img src={photo} alt={`Slide ${index}`} key={index}/>
                ))}
            </Slider>
        </div>
    );
}

export default PhotoSlider;
