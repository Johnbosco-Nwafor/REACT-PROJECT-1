import  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { section } from "../mirage/Server";
import { GoGraph } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiBaseStationLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import Ticket from "./Ticket";
import Follow from './Follow';

const Mirage = () => {
  const { id } = useParams();
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

  // Find the section object with the matching ID
  const selectedSection = section.find((sect) => sect.id === parseInt(id));

  if (!selectedSection) {
    return <div>Section not found!</div>;
  }

  return (
    <>
      <section className="selectedSection">
        {/* <Link to={.}><h1>Send To Back</h1></Link> */}
        <div className="section-2">
          <div className="section-1">
          <img src={selectedSection.img} alt={selectedSection.title} className="selected-image"/>
          </div>
         <div className="section-flex">
          <div className="section-flex1">
          <button className="section-button">Ticket Sales end soon</button>
          <h5 className="section-date">{selectedSection.date}</h5>
          <h1 className="section-title">{selectedSection.title}</h1>
          <p className="section-parag">With James</p>
          <div className="section-foot-flex">
            <div className="section-foot1">
              <h4 className="section-foot-network">By <span>{selectedSection.footer.Network}</span> . <span>{selectedSection.footer.follower}</span></h4>
              <p className="graph">88.3k attendee Hosted <span><GoGraph />
              </span></p>
            </div>
            <div className="section-follow">
             <Follow />
            </div>
          </div>
          <div className="yep">
          <div className="set">
            <h3 >DATE AND TIME</h3>
            <h4> <span><FaRegCalendarAlt />
            </span> {selectedSection.date}</h4>
          </div>
          <div className="set">
            <h3>LOCATION</h3>
            <h4><span><RiBaseStationLine /></span> Online</h4>
          </div>
          <div className="set">
            <h3>REFUND POLICY</h3>
            <h4>Refunds up to <span className="day7">7 days</span> before event</h4>
            <h4>Eventbrite's fee is nonrefundable</h4>
          </div>
          <div className="set">
            <h3>ABOUT THIS EVENT</h3>
            <h4> <span className="ciclock"><CiClock2 />
            </span>Event last 1 hour</h4>
          </div>
          <div>
            <h4 className="adjourn">Join Us {selectedSection.date}</h4>

            <p className="precedent">
            We are in a time of unprecedented societal division, where anger is widespread and tempers are fragile. In his latest book, The Age of Outrage, , Karthik Ramanna—professor of business and public policy at the University of Oxford’s Blavatnik School of Government and a former Marvin Bower Fellow at Harvard Business School—proposes a new approach to managing seemingly persistent stakeholder conflict
            </p>
            <p className="precedent">
            On November 26, Ramanna will help us make sense of this Age of Outrage, which he attributes to three main factors:
            </p>

            <div className="future">
            <ul>
              <li>
              A Fear of the Future caused by disruptive technology, climate change, and demographic shifts.
              </li>
              <li>
              A perception of being dealt a Raw Deal by those in power on issues like globalization, immigration, and taxation of the wealthy.
              </li>
              <li>
              An increasing Sense of Othering, where more individuals see the world in "us versus them" terms.
              </li>
            </ul>
            </div>
            <div>
              <p className="precedent">
              Despite these divisive forces, he maintains that leaders can still maintain cohesion and make a positive impact.
              </p>
              <p className="precedent">
              Drawing upon expertise from aggression science, managerial economics, organizational behavior, and political philosophy – and using the methodology he developed for his Oxford program, which has trained over 1,000 leaders from more than 120 countries – Ramanna provides a five-part framework to help leaders address crises:
              </p>
            </div>
            <div className="future">
              <ul>
                <li>
                  “Turning down the temperature”: Establishing an environment conducive to calm discussion.
                </li>
                <li>
                “Making sense of the moment”: Creating a listening culture to understand the sources of and catalysts to specific conflicts
                </li>
                <li>
                “Scoping the response”: Evaluating the organization’s capabilities and constraints, including moral responsibilities and pragmatic necessities, and developing a plan of action
                </li>
                <li>
                “Understanding the leader’s power”: Implementing the plan through decentralized action after doing a careful power mapping of the situation.
                </li>
                <li>
                “Building organizational and personal resilience”: Embracing practices that allow for organizational and personal renewal amidst difficult decision-making, including the capacity to learn from failure
                </li>
              </ul>
              
            </div>
            
                <p className="precedent">
                “Reading The Age of Outrage, one wonders how many communications calamities might have been avoided with the benefit of these insights...Not taking sides, Ramanna helps leaders in both the private and public sectors understand the instability of this moment—and act accordingly.” —David Rhodes, Executive Chairman, Sky News Group
                </p>

                <div>
                  <Ticket />
                </div>
              
          </div>
          </div>
          </div>
          <div className="flex2">
            <div className="select-tick">
              <button className="ket-button">Secure your Slot <br /> Scroll Down</button>
            </div>
          </div>
         </div>
        </div>
      </section>
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
      <section>
      
      </section>
    </>
  );
}

export default Mirage;
