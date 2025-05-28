// import React from 'react'
import { section } from "../mirage/Server";
import { IoIosContacts } from "react-icons/io";

const Business = () => {
    const Business = section
    .filter((cap) => cap.feature === "Business") // Filtering condition
    .map((cap) => {
      return (
        <div key={cap.id} className='cap'>
          <img src={cap.img} alt="" className='cap-image'/>
          <div className='cap-div'>
            <h4 className='cap-title'>{cap.title}</h4>
            <p className='cap-date'>{cap.date}</p>
            <p className='cap-price'>{cap.price}</p>
            <div className='cap-footer'>
              <h5 className='cap-network'>{cap.footer.Network}</h5>
              <div className='captor'>
              <span className='cap'><IoIosContacts />
              </span>
              <h5 className='cap-follower'>{cap.footer.follower}</h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className='cap-contain'>
          <h1>Business And Professional Events</h1>
          <section className='cap-map'>
             {Business}
          </section>
        </div>
      </div>
    )
}

export default Business