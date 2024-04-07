const Services = ({ services }) => {
  console.log("services", services);
  return (
    <div>
      {services.map(({ id, service_name, city_icon }) => {
        return (
          <div key={id}>
            <img src={city_icon} alt="Service Icon"/>
            <div>{service_name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
