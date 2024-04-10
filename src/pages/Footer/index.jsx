import "./style.css";
import connect from "../../assets/social.svg";

const index = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-contact">
        <h6 className="footer-contact-header">
          We are a design provider to create an elegant and
          <br />
          clean design dream house with your partner and
          <br />
          family
        </h6>
        <div>
          <input
            className="footer-contact-input"
            type="text"
            placeholder="Email Id"
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
