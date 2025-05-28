import { useState } from 'react';

const Follow = () => {
  // State to track follow status
  const [isFollowing, setIsFollowing] = useState(false);

  // Handle button click to toggle follow state and show alert
  const handleFollowClick = () => {
    if (!isFollowing) {
      alert('You are now following!');
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <button
        className="follow-button"
        onClick={handleFollowClick}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default Follow;
