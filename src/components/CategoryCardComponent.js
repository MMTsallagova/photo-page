import React from 'react';

const CategoryCardComponent = ({photo, categoryTitle, categoryDesc, setPopUp}) => {

    return (
        <div className="categorycard-container">
            <div className="categoryimg-container">
                <img src={photo} alt="Clickable Image" onClick={setPopUp}/>
            </div>
            <div className="categorycard-text-container">
               <span>
                    {categoryTitle}
               </span>
               <span>
                   {categoryDesc}
               </span>
            </div>
        </div>
    );
};

export default CategoryCardComponent;
