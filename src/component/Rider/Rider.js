import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import '../Header/Header.css';

const Rider = (props) => {
    const {title, image, id} = props.rider;
console.log(props.rider)
    return (
        <Link to={`/destination/${id}`}>
            <div className="rider-box">
                <h3>{title}</h3>
                <img src={image} alt=""/>
            </div>
        </Link>
    
    );
};

export default Rider;