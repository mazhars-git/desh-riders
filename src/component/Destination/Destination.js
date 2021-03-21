import React, { useState } from 'react';
import './Destination.css';
import image from '../../images/Map.png';

const Destination = () => {
    const [search, setSearch] = useState(true);
    return (
        <div className="destination-area container d-flex justify-content-space-between">
            <div className="search-area col-4">
                {!search && <span>
                    <p>Dhaka</p> 
                    <p>to</p>
                    <p>Sylhet</p>
                </span>}
                {search && <form action="">
                    <p>Pic from</p>
                    <input className='form-control' type="text"/>
                    <p>Pic to</p>
                    <input className='form-control' type="text"/><br/>
                    <input onClick={() => setSearch(!search)} className='btn-style' type="button" value="Search"/>
                </form>}
            </div>
            <div className="location-image col-8">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default Destination;