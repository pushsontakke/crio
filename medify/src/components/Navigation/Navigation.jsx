import logoImage from "../../assets/medify-logo.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="logo">
        <img src={logoImage} alt="LogoIcon" />
        <span>Medify</span>
      </div>
      <nav className="Navbar">
        <li className="Navbar-items">
          <a href="#">Find Doctors</a>
        </li>
        <li className="Navbar-items">
          <a href="#">Hospitals</a>
        </li>
        <li className="Navbar-items">
          <a href="#">Medicines</a>
        </li>
        <li className="Navbar-items">
          <a href="#">Surgeries</a>
        </li>
        <li className="Navbar-items">
          <a href="#">Software Provider</a>
        </li>
        <li className="Navbar-items">
          <a href="#">Facilities</a>
        </li>
      </nav>
      <button onClick={() => console.log("My Bookings")} className="bookingBtn">
        My Bookings
      </button>
    </div>
  );
};

export default Navigation;
