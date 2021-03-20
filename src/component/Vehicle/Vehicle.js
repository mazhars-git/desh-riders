import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/VehicleData.json';
import Home from '../Home/Home';

const Vehicle = () => {
    const [cars, setCars] = useState([0]);
    useEffect(() => {
         setCars(fakeData);
         console.log(fakeData)
    }, [])
    return (
        <div>
            <h1>Vehicles: {cars.length}</h1>
            {
                cars.map(car => <Home car={car}> </Home>)
            }
        </div>
    );
};

export default Vehicle;