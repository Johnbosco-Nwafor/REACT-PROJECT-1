import React from 'react'
import { section } from "../mirage/Server"
import { IoIosContacts } from "react-icons/io";

const Health = () => {
    const Health = section
    .filter((health) => health.feature === "Health") // Filtering condition
    .map((health) => {
      return (
        <div key={health.id} className='health'>
          <img src={health.img} alt="" className='health-image'/>
          <div className='health-div'>
            <h4 className='health-title'>{health.title}</h4>
            <p className='health-date'>{health.date}</p>
            <p className='health-price'>{health.price}</p>
            <div className='health-footer'>
              <h5 className='health-network'>{health.footer.Network}</h5>
              <div className='healthor'>
              <span className='heal'><IoIosContacts />
              </span>
              <h5 className='health-follower'>{health.footer.follower}</h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className='health-contain'>
          <h1>Health And Wellness Events</h1>
          <section className='health-map'>
             {Health}
          </section>
        </div>
      </div>
    )
}

export default Health