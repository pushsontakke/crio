// import Navigation from "../Navigation/Navigation";
import DoctorsImg from "../../assets/Doctors.png";
import "./HeroSection.css";

const Hero = () => {
  return (
    <div className="Hero">
      {/* <Navigation /> */}
      <div className="container">
        <div className="left-section">
          <div className="headline">
            Skip the travel! Find Online <span>Medical </span>
            <span>Centers</span>
          </div>
          <p className="description">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button className="find-centers-btn">Find Centers</button>
        </div>
        <div className="right-section">
          <img className="DoctorsImg" src={DoctorsImg} alt="DoctorsImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
