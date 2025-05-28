// import React from 'react'
import { section } from "../mirage/Server"
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeOnline = () => {
  const Online = section
  .filter((Home) => Home.feature === "Online event") // Filtering condition
  .map((Home) => {
    return (
      <div key={Home.id} className='Home-Online'>
        <Link className='linkid' to={`homeonline/${Home.id}`}>
        <img src={Home.img} alt="" className='Home-image'/>
        <div className='Home-div'>
          <h4 className='Home-title'>{Home.title}</h4>
          <p className='Home-date'>{Home.date}</p>
          <p className='Home-price'>{Home.price}</p>
          <div className='Home-footer'>
            <h5 className='Home-network'>{Home.footer.Network}</h5>
            <div className='Home'>
            <span className='Home-line'><IoIosContacts />
            </span>
            <h5 className='Home-follower'>{Home.footer.follower}</h5>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="Home-yes">
          <div className="Home-map">
            {Online}
          </div>
        
    </div>
  )
}

export default HomeOnline