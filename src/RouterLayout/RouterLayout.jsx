import { Routes, Route } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import Header from "../pages/Header/Index";
import Footer from "../pages/Footer";
const index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default index;
