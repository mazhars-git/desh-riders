import React from 'react';
import './Destination.css';

const Destination = () => {
    return (
        <div className="destination-area">
            <h1>This is destination</h1>
            <div className="location-area">
                <form action="">
                    <p>Pic from</p>
                    <input type="text"/>
                    <p>Pic to</p>
                    <input type="text"/>
                    <input type="button" value="Search"/>
                </form>
            </div>
            <div className="location-image">
                <img src="#" alt=""/>
            </div>
        </div>
    );
};

export default Destination;