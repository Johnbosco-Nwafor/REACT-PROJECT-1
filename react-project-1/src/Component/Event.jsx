import { useState, useEffect } from 'react';
import { section } from "../mirage/Server";
import image from "../assets/image/3f96dddb80dd0a06eb9e5836cc641f33-generic_2_desktop.webp";
import { IoIosContacts } from "react-icons/io";
import Pick from '../Pages/Pick';
import Business from '../Pages/Business';
import Health from '../Pages/Health';
import { Link } from 'react-router-dom';

const Event = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll-to-top button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const style = {
    height: "50vh",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginInline: "3rem",
    paddingTop: "9rem",
    borderRadius: "5rem",
    position: "relative",
  };

  const filteredSectionList = section
    .filter((sec) => sec.feature === "Online event") // Filtering condition
    .map((sec) => {
      return (
        <div key={sec.id} className='sec'>
          <Link className='linkid' to={`online/${sec.id}`}>
            <img src={sec.img} alt="" className='sec-image' />
            <div className='sec-div'>
              <h4 className='sec-title'>{sec.title}</h4>
              <p className='sec-date'>{sec.date}</p>
              <p className='set-price'>{sec.price}</p>
              <div className='sec-footer'>
                <h5 className='sec-network'>{sec.footer.Network}</h5>
                <div className='con'>
                  <span className='spa'><IoIosContacts /></span>
                  <h5 className='sec-follower'>{sec.footer.follower}</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <section className='eventpro'>
      <div style={style}>
        <div className='overlay'></div>
        <div className='parag'>
          <h1 className='best'>Explore And Attend <span className='town'>Online Events</span></h1>
          <p className='stuff'>
            Online events bring people from around the world together to learn, to be entertained, and to be a part of a community. Find the perfect training course to learn new skills and earn certifications. No matter what you are looking for, there is an online event that is just right for you.
          </p>
        </div>
      </div>

      <div className='filter-contain'>
        <h1>Popular Online Event</h1>
        <section className='filter-map'>
          {filteredSectionList}
        </section>
      </div>

      <Filter />
      <Online />
      <Pick />
      <Business />
      <Health />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button 
          onClick={scrollToTop} 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            padding: '10px 15px',
            fontSize: '18px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          ↑
        </button>
      )}
    </section>
  );
};

export const Filter = () => {
  const filteredList = section
    .filter((sect) => sect.feature === "this weekend") // Filtering condition
    .map((sect) => {
      return (
        <div key={sect.id} className='sector'>
          <Link className='linkid' to={`online/${sect.id}`}>
            <img src={sect.img} alt="" className='sector-image' />
            <div className='sector-div'>
              <h4 className='sector-title'>{sect.title}</h4>
              <p className='sector-date'>{sect.date}</p>
              <p className='sector-price'>{sect.price}</p>
              <div className='sector-footer'>
                <h5 className='sector-network'>{sect.footer.Network}</h5>
                <div className='contor'>
                  <span className='spator'><IoIosContacts /></span>
                  <h5 className='sector-follower'>{sect.footer.follower}</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div>
      <div className='filtor-contain'>
        <h1>This Weekend</h1>
        <section className='filtor-map'>
          {filteredList}
        </section>
      </div>
    </div>
  );
};

export const Online = () => {
  const List = section
    .filter((list) => list.feature === "online classes") // Filtering condition
    .map((list) => {
      return (
        <div key={list.id} className='list'>
          <Link className='linkid' to={`online/${list.id}`}>
            <img src={list.img} alt="" className='list-image' />
            <div className='list-div'>
              <h4 className='list-title'>{list.title}</h4>
              <p className='list-date'>{list.date}</p>
              <p className='list-price'>{list.price}</p>
              <div className='list-footer'>
                <h5 className='list-network'>{list.footer.Network}</h5>
                <div className='list-icon'>
                  <span className='list-tag'><IoIosContacts /></span>
                  <h5 className='list-follower'>{list.footer.follower}</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div>
      <div className='list-contain'>
        <h1>Online Classes</h1>
        <section className='list-map'>
          {List}
        </section>
      </div>
    </div>
  );
};

export default Event;
