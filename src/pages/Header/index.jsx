import { useState } from "react";
import logo from "../../assets/joboyLogo.png";
import ButtonComponets from "../../components/ButtonComponets/ButtonComponets";
import "./index.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Modal from "react-modal";
import img from "../../assets/doodle-banner.png";
const Index = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-fixed-top border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width={130} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <div className="d-flex align-items-center justify-content-evenly">
                  <li>
                    <ButtonComponets text={"LOGIN"} />
                  </li>
                  <li className="nav-item dropdown ms-4">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </a>
                    <ul
                      className="dropdown-menu"
                      style={{ borderTop: "5px solid #ffca08" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="d-flex align-items-center justify-content-evenly">
                  <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="#">
                      <FaSearch />
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="#">
                      Service
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="#">
                      Shopping
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="#">
                      Deals
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="#">
                      <FaShoppingCart />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={openModal}>
                      {/* <ButtonComponets text={"KOCHI"} className="btn-city" /> */}
                      <ButtonComponets text={"KOCHI"} className="btn-city">
                        KOCHI <span style={{ marginLeft: "5px" }}>&gt;</span>
                      </ButtonComponets>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="d-flex justify-content-end">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
          </div>

          <h3 className="text-center">SELECT YOUR LOCATION TO CONTINUE</h3>
          <div className="d-flex justify-content-center align-items-center m-3">
            <FaSearch
              className="me-3"
              style={{
                color: "#E86121",
              }}
            />
            <input
              className="w-25"
              type="text"
              style={{
                border: "none",
                borderBottom: "1px solid",
              }}
              placeholder="Select your location"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-center">POPULAR CITIES</h3>
            <div className="d-flex justify-content-between align-items-center flex-wrap m-5">
              <div className="cities-wrapper">CHENNAI</div>
              <div className="cities-wrapper">KOCHI</div>
              <div className="cities-wrapper">BENGALURU</div>
              <div className="cities-wrapper">TRIVANDRUM</div>
              <div className="cities-wrapper">MUMBAI</div>
              <div className="cities-wrapper">DELHI NCR</div>
              <div className="cities-wrapper">KOZHIKODE</div>
              <div className="cities-wrapper">THRISSUR</div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={img} width={700} />
          </div>
        </Modal>
      </div>
    </>

    // <nav className="navbar navbar-expand-xl navbar-fixed-top border-bottom navigation-bar">
  );
};

export default Index;
