import React from 'react';
import Rider from '../Rider/Rider';

const Home = (props) => {
    
    const riders = [
        {
            "id": 1,
            "title": "Bike",
            "image": "https://i.ibb.co/zm0cffS/Frame.png"
          }, {
            "id": 2,
            "title": "Car",
            "image": "https://i.ibb.co/kmLw9Yw/Frame-1.png"
          }, {
            "id": 3,
            "title": "Bus",
            "image": "https://i.ibb.co/Jv1yjqt/Frame-2.png"
          }, {
            "id": 4,
            "title": "Train",
            "image": "https://i.ibb.co/dDRVVH1/Group.png"
        }
    ]
    const handleDetail = () =>{
        
    }
    return (
        <div className="container all-riders col-md-3 d-flex justify-content-around">
            {
                riders.map(rider => <Rider handleDetail={handleDetail} key={rider.id} rider={rider}></Rider>)
            }
        </div>
    );
};

export default Home;