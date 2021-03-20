import React from 'react';
import Vehicle from '../Vehicle/Vehicle';

const Home = (props) => {
    const {title, img} = props.car;
    return (
        <div className="container">
            
            <h1>This is Home {title}</h1>
            <img src={img} alt=""/>
        </div>
    );
};

export default Home;