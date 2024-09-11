import React from 'react';
import {images, textContent} from "../assets/assets";

const MainPhotoComponent =() => {

    return (
        <div className="mainphoto-container">
            <div className="mainimg-container">
                <img src={images.MainPhoto} alt="Jgbcfybt"/>
            </div>
            <div className="mainphoto-text-container">
               <span>
                    {textContent.main.title}
               </span>
               <span>
                    {textContent.main.subtitle}
               </span>
            </div>
        </div>
    );
};

export default MainPhotoComponent;
