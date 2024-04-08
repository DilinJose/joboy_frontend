import "./Services.css";
const Services = ({ services }) => {
  return (
    <div className="service-wrapper">
      {services.map(({ id, service_name, city_icon }) => {
        return (
          <div key={id} className="service-card">
            <img src={city_icon} alt="Service Icon" className="service-img" />
            <span className="service-name">{service_name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
