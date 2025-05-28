// import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaIoxhost } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import BlogLink from "../Links/BlogLink";
import { useNavigate } from "react-router-dom";


const Pages = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Event'); // Navigate to the Events page
  };

  // Hook to detect if the stats section is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Count up only once
    threshold: 0.3,    // Start animation when 30% of the element is visible
  });

  return (
    <>
      <section>
        <div className="page-back">
          <h1>About Us</h1>
        </div>
      </section>
      <section className="page-flex">
        <div className="page-flex-1">
          <p>Welcome</p>
          <h1 className="page-h1">We Inspire People To Go Out More</h1>
          <h5 className="page-h5">
            Influential media, entertainment & technology show inspiration
            speaker including game-changing not just a large-scale conference
            educational hub on digital technologies for business, where
            people communicate, inspired find
          </h5>
          
          <button className="page-button" onClick={handleExploreClick}>
            SEE ALL EVENT <span><FaLongArrowAltRight /></span>
          </button>
          
        </div>

        <div className="page-flex-2">
          <img
            src="https://demo-themewinter.com/eventplace/eventin-pro/wp-content/uploads/sites/2/2023/02/about_image_1.png"
            alt="About Us"
          />
        </div>
      </section>

      <section className="page-grid" ref={ref}>
        <div className="page-grid-1">
          <div className="grid-flex">
            <span className="peopleGroup"> <FaPeopleGroup /> </span>
            <div className="in-view">
              <h1>
                {inView && (
                  <CountUp end={40} duration={2} separator="," />
                )}{""}
                k+
              </h1>
              <h4>Event Organizers</h4>
            </div>
          </div>
        </div>
        <div className="page-grid-1">
          <div className="grid-flex">
            <span className="peopleGroup"> <FaIoxhost /> </span>
            <div className="in-view">
              <h1>
                {inView && (
                  <CountUp end={29} duration={2} separator="," />
                )}{""}
                k+
              </h1>
              <h4>Event Hosted</h4>
            </div>
          </div>
        </div>
        <div className="page-grid-1">
          <div className="grid-flex">
            <span className="peopleGroup"><IoTicketOutline /></span>
            <div className="in-view">
              <h1>
                {inView && (
                  <CountUp
                    end={11}
                    duration={2}
                    separator=","
                    decimals={1}
                    decimal="."
                  />
                )}{""}
                m+
              </h1>
              <h4>Tickets Sold</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="page-flex">
        <div className="page-flex-2">
          <img src="https://demo-themewinter.com/eventplace/eventin-pro/wp-content/uploads/sites/2/2022/12/organizer_event_img.png" alt="" />
        </div>

        <div className="page-flex-1">
          <p>Organizers</p>
          <h1 className="page-h1">Event Organizers</h1>
          <h5 className="page-h5">
            Influential media, entertainment & technology show inspirational
            speaker including game-changing not just a large-scale conference,
            educational hub on digital technologie for business, wher
            people communicate, inspired find.
          </h5>
          <button className="page-button">ALL ORGANIZERS <span> <FaLongArrowAltRight/> </span></button>
        </div>
      </section>

      
        
        <div>
          <BlogLink />
        </div>
      
    </>
  );
};

export default Pages;
