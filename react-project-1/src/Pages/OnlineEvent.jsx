// import React from 'react'
import { section } from "../mirage/Server"
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router-dom";
import OnlineExplore from "../Links/OnlineExplore";


const OnlineEvent = () => {
  const Online = section
  .filter((online) => online.feature === "Online event" & online.id <= 4) // Filtering condition
  .map((online) => {
    return (
      <div key={online.id} className='online'>
        <Link className='linkid' to={`event/${online.id}`}>
        <img src={online.img} alt="" className='online-image'/>
        <div className='online-div'>
          <h4 className='online-title'>{online.title}</h4>
          <p className='online-date'>{online.date}</p>
          <p className='online-price'>{online.price}</p>
          <div className='online-footer'>
            <h5 className='online-network'>{online.footer.Network}</h5>
            <div className='ontor'>
            <span className='onlinet'><IoIosContacts />
            </span>
            <h5 className='online-follower'>{online.footer.follower}</h5>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return (
    <div>
          <div className="join">
            <h3 className="onlin">Online Event</h3>
            <OnlineExplore />
          </div>
      
              
          <section className='online-map'>
             {Online}
          </section>
        
        </div>
  )
}

export default OnlineEvent