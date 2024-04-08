import "./Services.css";
const Services = ({ services }) => {
  return (
    <div className="service-wrapper">
      {services.map(({ id, service_name, city_icon }) => {
        return (
          <div key={id} className="service-card">
            <img src={city_icon} alt="Service Icon" />
            <h6 className="service-name">{service_name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
