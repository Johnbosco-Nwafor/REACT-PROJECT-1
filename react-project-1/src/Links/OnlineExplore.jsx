// import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineExplore = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/HomeOnline'); // Navigate to the Events page
  };

  return (
    <div>
      <h2 className="descript" onClick={handleExploreClick} style={{ cursor: 'pointer', color: 'blue' }}>
      Explore more of Online Events
      </h2>
    </div>
  );
};

export default OnlineExplore;
