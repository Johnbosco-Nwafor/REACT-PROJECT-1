// import React from 'react'
import footerlogo from "../assets/image/logo.png"
import app from "../assets/image/app_store.png.png"
import google from "../assets/image/google_play.png.png"
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useState } from "react";
// import {FiSend} from "react-icons/fa"

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear())
  return (
    <section className="footer">
        <div className="footer-container">
            <div className="foot-right">
                <img src={footerlogo} alt="" className="imgsrc"/>
                <p className="single">
                    Whether you want to host a single
                    or multi-events, EventPlace is your
                    best choice for you.
                </p>
                
                <div className="App">
                    <h1 className="download">APP DOWNLOAD:</h1>
                    <div className="goo">
                        <img src={app} alt="" className="google"/>
                        <img src={google} alt="" className="google"/>
                    </div>
                </div>
            </div>

            <div className="footer-left">
                <div className="left-container">
                    <div className="face">
                        <h1 className="follow">FOLLOW US:</h1>
                        <span>
                        <FaFacebook className="ico"/>
                        <FaTwitter className="ico"/>
                        <FaLinkedinIn className="ico"/>
                        <FaInstagram className="ico"/>
                        </span>
                    </div>
                    <div className="subtext">
                        <h1 className="scribetext">SUBSCRIBE</h1>
                        <input type="text" placeholder='Email'/>
                    </div>
                </div>

                <hr />

                <div className="infotag">
                    <div className="info-con">
                        <h1 className="info">Event Info</h1>
                       <ul className="info-ul">
                            <li> <Link className="link-tag">All Events</Link></li>
                            <li><Link className="link-tag">Featured Events</Link></li>
                            <li><Link className="link-tag">Upcoming Events</Link></li>
                       </ul>
                    </div>

                    <div>
                        <h1 className="useful">Useful Link</h1>
                        <div className="useful-flex">
                            <ul className="useful-ul">
                                <li><Link className="link-tag">Home</Link></li>
                                <li><Link className="link-tag">About</Link></li>
                                <li><Link className="link-tag">Events</Link></li>
                            </ul>
                            <ul className="link-ul">
                                <li><Link className="link-tag">Blog</Link></li>
                               <li> <Link className="link-tag">Team</Link></li>
                                <li><Link className="link-tag">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h1 className="help">Looking For Help</h1>
                        <ul className="help-ul">
                            <li><Link className="link-tag">FAQS</Link></li>
                            <li><Link className="link-tag">Privacy</Link></li>
                            <li><Link className="link-tag">Terms</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright">
            <p className="reserved">&copy; {year}, Eventplace. All rights reserved</p>
        </div>
    </section>
  )
}

export default Footer