import React from 'react';
import '../Home/Home.css';

const Rider = (props) => {
    const {title, image} = props.rider;
console.log(props.rider)
    return (
    <div className="rider-box">
        <h3>{title}</h3>
        <img src={image} alt=""/>
    </div>
    
    );
};

export default Rider;