import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
const Services = ({ services }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="service-wrapper">
      {services.map(({ id, service_name, city_icon }) => {
        return (
          <div key={id} className="service-card " data-aos="fade-up">
            <img src={city_icon} alt="Service Icon" className="service-img" />
            <span className="service-name">{service_name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
