import logo from "../../assets/joboyLogo.png";
import ButtonComponets from "../../components/ButtonComponets/ButtonComponets";
import "./index.css";
const index = () => {
  return (
    // <nav className="navbar navbar-expand-xl navbar-fixed-top border-bottom navigation-bar">
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
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <ButtonComponets text={"KOCHI"} />
                  </a>
                </li>
              </div>
            </div>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default index;
