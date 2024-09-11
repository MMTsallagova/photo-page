import React from 'react';

const PageTextComponent =({aboutMeTitleText, aboutMeText, aboutMeContacts}) => {

    return (
        <div className="pagetext-container">
            <div className="pagetext-title-container">
                <span>
                    {aboutMeTitleText}
                </span>
            </div>
            <div className="pagetext-main-container">
                <span>
                    {aboutMeText}
                </span>
            </div>
            <div className="pagetext-location-container">
                <span>
                    {aboutMeContacts}
                </span>
            </div>
        </div>
    );
};

export default PageTextComponent;