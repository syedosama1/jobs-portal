import React from "react";
import "../styles/footer.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 

const Footer = ({ small, title }) => {
  const brands = [
    
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a7bebf06cc_aditya.png?d=168x96",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners75/5c77b3e35903f_KPMG.png?d=175x72",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/60d5e91b93542_PepsiCo_logo.png?d=120x34",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/63dcfec0b7c7a_agoda_new.png?d=220x112",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners75/5c7d0d3c318e3_Airtel.png?d=175x58",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/63e0f796d74c0_uber.png?d=120x120",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/633d3fe0b3536_challenge_logo.jpg?d=110x110",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/60d5e91b93542_PepsiCo_logo.png?d=120x34",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7d138408595_image__15_.png?d=200x200",
  ];

  return (
    <section className="brands">
      <div className="brands-container">
        <h2>
          {small}
          <span>{title}</span>
        </h2>
        <div className="brands-container">
          <Swiper
            spaceBetween={1}
            slidesPerView={6}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            speed={2000}
          >
           
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <img src={brand} alt={`brand-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Footer;
