import React, { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';
import fakeData from '../RidersData/RidersData.json';

const Home = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() => {
      setRiders(fakeData);
    }, []);
    
    return (
        <div className="container all-riders d-flex justify-content-around">
              {
                riders.map(rd => <Rider key={rd.id} rider={rd}></Rider>)
              }
        </div>
    );
};

export default Home;