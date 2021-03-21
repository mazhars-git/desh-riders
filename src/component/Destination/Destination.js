import React, { useEffect, useState } from 'react';
import './Destination.css';
import image from '../../images/Map.png';
import icon from '../../images/peopleicon.png';
import { useParams } from 'react-router';
import fakeData from '../RidersData/RidersData.json';


const Destination = () => {
    const {key} = useParams();
    // console.log('car id', key)
    const [search, setSearch] = useState(true);
    const rider = fakeData.find(rd => rd.key === key);
    // console.log(rider);

    return (
        <div className="destination-area container d-flex justify-content-space-between">
            <div className="search-area col-4">
                {!search && <div>
                    <div className="content">
                        <p>Dhaka</p> 
                        <p>to</p>
                        <p>Sylhet</p>
                    </div>
                    <div className="card">
                        <img className="rideImage" src={rider.image} alt=""/>
                        <li>{rider.title}</li>
                        <li><img src={icon} alt=""/></li>
                        <li>4</li>
                        <li>$60</li>
                    </div>
                </div>}
                {search && <form action="">
                    <p>Pic from</p>
                    <input className='form-control' type="text" name="locationFrom"/>
                    <p>Pic to</p>
                    <input className='form-control' type="text" name="locationTo"/><br/>
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