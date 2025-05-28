import  { useState, useEffect } from 'react';
import background from "../assets/image/background.jpg"
import Category from "../Pages/Category"
import OnlineEvent from "../Pages/OnlineEvent"
import Upcoming from "../Pages/Upcoming"


const Home = () => {
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


  const style ={
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
  return (
    <section>
        <div style={style}>
          <div className='home-title'>
          <div>
          <h3 className='sub'>Find Your Next Experience</h3>
          <h1 className='title'>Discover & Promote Upcoming Event</h1>
          </div>
          </div>
        </div>

        <Upcoming />
        <Category />
        <OnlineEvent />

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
            zIndex: "100"
          }}
        >
          ↑
        </button>
      )}
    </section>
  )
}

export default Home