import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CategoryCardComponent from "./components/CategoryCardComponent";
import PageTextComponent from "./components/PageTextComponent";
import MainPhotoComponent from "./components/MainPhotoComponent";
import {collections, images, textContent} from "./assets/assets";
import React, {useEffect, useState} from "react";
import PhotoSlider from "./components/PhotoSlider";

function App() {
    const [popUp, setPopUp] = useState('');
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        if (popUp === 'street') {
            setCollection(collections.street)
        } else if (popUp === 'random') {
            setCollection(collections.random)
        } else if (popUp === 'tokyo') {
            setCollection(collections.tokyo)
        }
    }, [popUp]);

    return (
        <div className="Page-container">
            <MainPhotoComponent/>
            <div className="category-gallery-container">
                <CategoryCardComponent
                    photo={images.StreetPhoto2}
                    categoryTitle={textContent.category1.title}
                    categoryDesc={textContent.category1.subtitle}
                    setPopUp={() => setPopUp('street')}
                />
                <CategoryCardComponent
                    photo={images.RandomShoot6}
                    categoryTitle={textContent.category2.title}
                    categoryDesc={textContent.category2.subtitle}
                    setPopUp={() => setPopUp('random')}
                />
                <CategoryCardComponent
                    photo={images.CollectionPhoto}
                    categoryTitle={textContent.category3.title}
                    categoryDesc={textContent.category3.subtitle}
                    setPopUp={() => setPopUp('tokyo')}
                />
            </div>

            <PageTextComponent
                aboutMeTitleText={textContent.downtext.title}
                aboutMeText={textContent.downtext.subtitle}
                aboutMeContacts={textContent.downtext.contacts}
            />
            <div
                className={`pop-up-overlay ${popUp ? 'visible' : 'hide'}`}
                onClick={() => setPopUp('')}
            >
                <div
                    className="pop-up-box"
                    onClick={(e) => e.stopPropagation()}
                >
                    <PhotoSlider collection={collection}/>
                </div>

            </div>

        </div>
    );
}

export default App;
