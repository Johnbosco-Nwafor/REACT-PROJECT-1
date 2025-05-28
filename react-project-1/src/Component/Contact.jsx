import {Location} from "../mirage/Location"
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import Email from "../Links/Email"

const Contact = () => {
  const location = Location.map((locate) => {
    return(
      <div key={locate.id}>
          <div className='locate-flex'>
            <div className="locate-image">
              <img src={locate.Image} alt="" />
            </div>
            <div className='locate-flex1'>
              <h1 className="locate-h1">{locate.location}</h1>
              <p className="locate-p"> <span> <CiLocationOn /> </span> {locate.city}</p>
              <p className="locate-p"> <span> <MdAddCall /> </span> {locate.number}</p>
              <p className="locate-p"> <span> <MdOutlineMail /> </span>{locate.Email}</p>
            </div>
          </div>
      </div>
    )
  })
  return (
    <>
      <div className="contact-con">
        <h1 className="contact-conh1">Contact</h1>
      </div>
      <section className="yep">
      <div className="location-faq">
      <h3 className="faq">Our FAQ</h3>
      <h1 className="faq-our">Our Location</h1>
      <div className="location-page">
      {location}
      </div>
      </div>

      <div>
        <Email />
      </div>
    </section>
    </>
  )
}

export default Contact