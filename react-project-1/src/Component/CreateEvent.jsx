import { useNavigate } from 'react-router-dom';
import background from "../assets/image/background.jpg"
import createImage from "../assets/image/lololol.jpg"

const CreateEvent = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  const handleExplore = () => {
    navigate('/createYourEvent'); // Navigate to the contact page
  };

  const style ={
    height: "130vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
  return (
    <section style={style}>
      <div className='createEvent-margin'>
        <div className='createEvent-con'>
          <div className='back-button-flex'>
            <button onClick={handleExploreClick} className='back-button'>Go Back</button>
          </div>
          <div className='exploreEvent-spacing'>
          <p className='spacing1'>4:44 AM PST</p>
          <p className='spacing1'>Explore Events</p>
          <button className='spacing-button'>Sign In</button>
          </div>
        </div>

        <div className='createEvent-Brites'>
          <div className='delightful'>
            <h3 className='delightfulh3'>EventBrites</h3>
            <h1 className='delightfulh1'>Delightful Events Start Here.</h1>
            <p className='delightfulp'>Set up your Events Page, Invite friends and sell tickets. Host a memorable events today.</p>

            <button onClick={handleExplore} className='back-button'>Create your first event</button>
          </div>

          <div>
            <div className='create-radius'>
              <img src={createImage} alt="" className='createImage'/>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default CreateEvent