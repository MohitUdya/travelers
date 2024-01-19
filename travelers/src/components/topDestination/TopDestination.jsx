import React from 'react';
import './style.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import cardApi from '../../apiHelper/cardApi';

const TopDestination = React.memo(() => {



  const Card = React.memo(({ data }) => (
    <Link to={`/packages/${data.id}`} key={data.id}>
      <div className="card">
        <div className="card-overlay"></div>
        <img className="card-img" src={data.url} alt="" />
        <div className="card-data">
          <p>{data.name}</p>
        </div>
        <div className="card-hover-data">
          <BsFillArrowRightCircleFill className="card-icon" />
          <button>Explore more</button>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="topDestination">
      <div className="topDestination-heading">
        <div>
          <h3>TOP DESTINATION</h3>
          <p>This is the most popular destination in the last month</p>
        </div>
        <div className="topDestination-btn">
          <button>ALL DESTINATION</button>
        </div>
      </div>
      <div className="cards" >
        {cardApi.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
});

export default TopDestination;
