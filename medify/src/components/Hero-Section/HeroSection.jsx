import Navigation from "../Navigation/Navigation";


const Hero = () => {
    return (
        <div className="Hero">
            <Navigation />        
            <div className="container">
                <div className="left-section"></div>
                <div className="right-section"><img src="../../assets/Doctors.png" alt="DoctorsImage" /></div>
            </div>
        </div>
    );
};

export default Hero;