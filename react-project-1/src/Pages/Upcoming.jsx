import  { useState} from 'react';
import { section } from "../mirage/Server";
import { IoIosContacts } from "react-icons/io";
import { Link } from 'react-router-dom';
import {Event} from "../Component/Event";


const Upcoming = () => {
  // State to keep track of the search input and filtered results
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(section);

  // Handle input change and filter results
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter by title and feature
    const filtered = section.filter(item =>
      item.title.toLowerCase().includes(value) ||
      item.feature.toLowerCase().includes(value)
    );

    setFilteredResults(filtered);

    
  };

  return (
    <div className='coming'>
      <input
        type="text"
        placeholder="Search Upcoming Events"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '50%',
          height: "35px",
          padding: '10px',
          fontSize: '20px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '2px solid black',
          marginInline: "3rem",
    
        }}
      className='input'/>

      <div className='upcoming'>
        {/* <h4 className='even'>Upcoming Event</h4> */}
       <Link to={<Event />}>
       <h1 className='featured'>Explore More Events</h1>
       </Link>
      </div>

      <div className='up-map'>
        {filteredResults.length > 0 ?(
          filteredResults
          .filter((up) => up.date >= "Thu, Nov 28 • 10:30 AM PST" && up.id <= 19)
          .map((up) => (
            <div key={up.id} className='up'>
  <Link className='linkid' to={`event/${up.id}`}>
    <img src={up.img} alt="" className='up-image' />
    <div className='up-div'>
      <h4 className='up-title'>{up.title}</h4>
      <p className='up-date'>{up.date}</p>
      <p className='up-price'>{up.price}</p>
      <div className='up-footer'>
        <h5 className='up-network'>{up.footer.network}</h5>
        <div className='uptor'>
          <span className='up'>
            <IoIosContacts />
          </span>
          <h5 className='up-follower'>{up.footer.follower}</h5>
        </div>
      </div>
    </div>
  </Link>
</div>

          ))
        ) :  (
          // Render "Not Available" if no results found
          <div style={{ textAlign: 'center', fontSize: '30px', color: 'black', marginTop: '20px' }}>
            Not Available
          </div>
        )}
          
        
      </div>
    </div>
  );
};

export default Upcoming;
