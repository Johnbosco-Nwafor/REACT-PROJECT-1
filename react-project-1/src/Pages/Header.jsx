import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/image/logo.png
const Header = () => {
  
  return (
    <section className='section'>
        <nav className='navbar'>

                <Link to="/"><img className='img' src={logo} alt="" /></Link>

            <div className='nav-bar'>
                <NavLink className="link" 
                to="/"
                >HOME</NavLink>
                <NavLink className="link" to="event">EVENTS</NavLink>
                <NavLink className="link" to="pages">PAGES</NavLink>
                <NavLink className="link" to="contact">CONTACT</NavLink>
            </div>

            <div className='button'>
            
                <NavLink className='event' to={"add-event"}>ADD EVENT</NavLink>
            </div>
        </nav>
    </section>
  )
}

export default Header