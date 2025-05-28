// import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Event'); // Navigate to the Events page
  };

  return (
    <div>
      <h1 className="featured" onClick={handleExploreClick} style={{ cursor: 'pointer', color: 'blue' }}>
        Explore More Events
      </h1>
    </div>
  );
};

export default HomePage;
