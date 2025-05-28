import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from "../assets/image/person-1.jpg";
import image2 from "../assets/image/person-2.jpg";
import image3 from "../assets/image/person-3.jpg";
import image4 from "../assets/image/person-5.jpg";

const Pick = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9', marginInline: "3rem" }}>
      <div style={{display: "flex", gap: "1rem"}}>
      <h3 style={{ textAlign: 'center', color: '#555', fontSize: '30px', paddingBottom: '15px' }}>Hand-Picked</h3>
      <h2 style={{ textAlign: 'center', color: '#333', fontSize: '30px', paddingBottom: '15px' }}>Collections</h2>
      </div>
      <p style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', color: '#777' }}>
        Discover more of the best in food, music, wellness, and more with our curated event collections
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ marginTop: '20px' }}
      >
        <SwiperSlide>
          <div style={{ display: 'flex', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={image1} alt="" style={{ width: '40%', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>The best virtual events you can attend from home</h3>
              <div>
                <span style={{ fontWeight: 'bold', color: '#888' }}>The next Upcoming Event</span>
                <p style={{ color: '#555' }}>
                  Don’t feel like leaving the house? You can still attend a comedy workshop, join a yoga class, or discuss a recent page-turner with a book club — virtually, of course. Eventbrite’s experts have curated the best online events and experiences where you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ display: 'flex', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={image2} alt="" style={{ width: '40%', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Black History Events Every Month: Inspire Action, Education & Collection</h3>
              <div>
                <span style={{ fontWeight: 'bold', color: '#888' }}>The next Upcoming Event</span>
                <p style={{ color: '#555' }}>
                  It is never been More important to celebrate the Black. You can still attend a comedy workshop, join a yoga class, or discuss a recent page-turner with a book club — virtually, of course. Eventbrite’s experts have curated the best online events and experiences where you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ display: 'flex', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={image3} alt="" style={{ width: '40%', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Home For the Holidays: Virtual Christmas Events 2024</h3>
              <div>
                <span style={{ fontWeight: 'bold', color: '#888' }}>The next Upcoming Event</span>
                <p style={{ color: '#555' }}>
                  No matter what you reason for the season is, there is holiday that will some cheers to your day. You can still attend a comedy workshop, join a yoga class, or discuss a recent page-turner with a book club — virtually, of course. Eventbrite’s experts have curated the best online events and experiences where you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ display: 'flex', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={image4} alt="" style={{ width: '40%', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Tricks & Treats: Virtual Halloween Events 2024</h3>
              <div>
                <span style={{ fontWeight: 'bold', color: '#888' }}>The next Upcoming Event</span>
                <p style={{ color: '#555' }}>
                  You don't need to leave your house to celebrate the spookiest month of the year with frightening array of virtual Halloween Events. You can still attend a comedy workshop, join a yoga class, or discuss a recent page-turner with a book club — virtually, of course. Eventbrite’s experts have curated the best online events and experiences where you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Pick;
