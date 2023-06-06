import React from 'react';
import SinglePageUserData from "./SinglePage/SinglePageUserData";

const Menu = () => {
    const userId = "6435a2c19bdc5fcf5e235ccc"

    return (
        <div>
            <SinglePageUserData userId={userId}/>
        </div>
    );
};

export default Menu;