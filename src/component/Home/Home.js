import React, { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';
import fakeData from '../RidersData/RidersData.json';

const Home = () => {
    
// const riders = [
//         {
//             "id": 1,
//             "title": "Bike",
//             "image": "https://i.ibb.co/zm0cffS/Frame.png"
//           }, {
//             "id": 2,
//             "title": "Car",
//             "image": "https://i.ibb.co/kmLw9Yw/Frame-1.png"
//           }, {
//             "id": 3,
//             "title": "Bus",
//             "image": "https://i.ibb.co/Jv1yjqt/Frame-2.png"
//           }, {
//             "id": 4,
//             "title": "Train",
//             "image": "https://i.ibb.co/dDRVVH1/Group.png"
//         }
//     ]
    const [riders, setRiders] = useState([]);
    useEffect(() => {
      setRiders(fakeData);
    }, []);
    
    return (
        <div className="container all-riders col-md-3 d-flex justify-content-around">
            {/* {
                riders.map(rider => <Rider key={rider.id} rider={rider}></Rider>)
            } */}
            {
              riders.map(rd => <Rider key={rd.id} rider={rd}></Rider>)
            }
        </div>
    );
};

export default Home;