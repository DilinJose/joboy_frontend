import "./style.css";
import connect from "../../assets/social.svg";

const index = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-contact w-75 pe-4" >
        <div className="mb-3">
          <h6 className="mb-2">INDIA</h6>
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            <span className="me-2">CHENNAI |</span>
            <span className="me-2">KOCHI |</span>
            <span className="me-2">BENGALURU |</span>
            <span className="me-2">TRIVANDRAM |</span>
            <span className="me-2">MUMBAI |</span>
            <span className="me-2">DELHI NCR |</span>
            <span className="me-2">KOZHIKODE |</span>
          </div>
        </div>

        <div className="d-flex justify-content-start align-itens-center flex-wrap mb-4">
          <span>About Us |</span>
          <span> Terms & Conditions |</span>
          <span> Privacy Policy |</span>
          <span> Cancellation Policy |</span>
          <span> FAQ |</span>
          <span> Blog |</span>
          <span> Services |</span>
          <span> Shopping |</span>
        </div>
        <>
          <span className="footer-contact-header">
            Joboy connects you to experts around you for Home Maintenance and
            Repairs, Utility, Lifestyle, Health, Beauty, Travel, and other local
            services, and also brings Local Shopping, Deals, and Events to you,
            right where you are, through an easy to use platform. Schedule
            services as per your convenience, pay online or by cash, get
            warranty on services, and avail cashbacks and discounts through our
            rewards program. Uncomplicate Life!
          </span>
        </>
        <div className="my-5">
          <input
            className="footer-contact-input"
            type="text"
            placeholder="Enter email id"
          />
          <button className="footer-contact-sent mt-1">Sent</button>
        </div>
        <div className="footer-contact-connect">
          <img src={connect} alt="Connect" />
        </div>
      </div>
      <div className="footer-menus">
        <div>
          <h5 className="footer-menus-heading">Manus</h5>
          <div>
            <h6 className="footer-menus-links">Home</h6>
            <h6 className="footer-menus-links">Service</h6>
            <h6 className="footer-menus-links">Shopping</h6>
            <h6 className="footer-menus-links">Deals</h6>
            <h6 className="footer-menus-links">Cart</h6>
          </div>
        </div>
        <div>
          <h5 className="footer-menus-heading">About</h5>
          <div>
            <h6 className="footer-menus-links">Contact</h6>
            <h6 className="footer-menus-links">FAQ</h6>
          </div>
        </div>
        <div>
          <h5 className="footer-menus-heading">Contact</h5>
          <div>
            <h6 className="footer-menus-links">joboy@gmail.com</h6>
            <h6 className="footer-menus-links">0487 225544</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
