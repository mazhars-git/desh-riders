import React, { useEffect, useState } from 'react';
import './Destination.css';
import image from '../../images/Map.png';
import icon from '../../images/peopleicon.png';
import { useParams } from 'react-router';
import fakeData from '../RidersData/RidersData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const {key} = useParams();
    const [search, setSearch] = useState(true);
    const rider = fakeData.find(rd => rd.key === key);
    const [locationF, setLocationF] = useState();
    const [locationT, setLocationT] = useState();
    const [trDate, setTrDate] = useState();

    const handleLocation = (e) => {
        if (e.target.name === 'from') {
            const locationFrom = e.target.value;
            setLocationF(locationFrom);
        }
        if (e.target.name === 'to') {
            const locationTo = e.target.value;
            setLocationT(locationTo);
        }
        if (e.target.name === 'travelDate') {
            const travelDate = e.target.value;
            setTrDate(travelDate);
        }
    }

    return (
        <div className="destination-area container d-flex justify-content-space-between">
            <div className="row">
                <div className="search-area col-md-4">
                    {!search && <div>
                        <div className="content">
                            <p>{locationF}</p> 
                            <p><FontAwesomeIcon icon={faAngleDoubleDown} /></p>
                            <p>{locationT}</p>
                            <p>{trDate}</p>
                        </div>
                        <div className="card card-area">
                            <img className="rideImage" src={rider.image} alt=""/>
                            <p>{rider.title}</p>
                            <p><img src={icon} alt=""/> 4</p>
                            <p>$60</p>
                        </div>
                        <div className="card card-area">
                            <img className="rideImage" src={rider.image} alt=""/>
                            <p>{rider.title}</p>
                            <p><img src={icon} alt=""/> 6</p>
                            <p>$100</p>
                        </div>
                        <div className="card card-area">
                            <img className="rideImage" src={rider.image} alt=""/>
                            <p>{rider.title}</p>
                            <p><img src={icon} alt=""/> 8</p>
                            <p>$120</p>
                        </div>
                    </div>}
                    {search && <form className="form-area">
                        <p>Pic from</p>
                        <input onBlur={handleLocation} className='form-control' type="text" name="from"/>
                        <p>Pic to</p>
                        <input onBlur={handleLocation} className='form-control' type="text" name="to"/><br/>
                        <input type="date" name="travelDate"/> <br/>
                        <input onClick={() => setSearch(!search)} className='btn-style' type="button" value="Search"/>
                    </form>}
                </div>
                <div className="location-image col-md-8">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Destination;