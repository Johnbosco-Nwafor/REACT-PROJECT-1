
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import logo from "../assets/image/logo.png"

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
                <NavLink className="link" to="vendor">VENDOR</NavLink>
                <NavLink className="link" to="pages">PAGES</NavLink>
                <NavLink className="link" to="blog">BLOG</NavLink>
                <NavLink className="link" to="contact">CONTACT</NavLink>
            </div>

            <div className='button'>
                <CgProfile className='profile'/>   
                <button className='event'>ADD EVENT</button>
            </div>
        </nav>
    </section>
  )
}

export default Header