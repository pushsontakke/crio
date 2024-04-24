import Navigation from "../Navigation/Navigation";
import DoctorsImg from "../../assets/Doctors.png";
import "./HeroSection.css";

const Hero = () => {
  return (
    <div className="Hero">
      <Navigation />
      <div className="container">
        <div className="left-section"></div>
        <div className="right-section">
          <img className="DoctorsImg" src={DoctorsImg} alt="DoctorsImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
