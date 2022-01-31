import Nav from "./components/Nav";
import "./App.css";
import home from "./assets/img/home.png";

import itsupport from "./assets/img/itsupport.jpg";
import digital_matrix from "./assets/img/digital.jpg";
import infosys from "./assets/img/infosys.png";
import pursho from "./assets/img/pursho.jpg";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import data from "./SecondHalf";

function App() {
  return (
    <div className="app">
      {/* <Nav /> */}
      <div className="firsthalf">
        <div className="child">
          <h1>Nebula Technology</h1>
          <h3>Where creation happens...</h3>
          <div className="technology">
            <h5> Java </h5>
            <h5> PHP </h5>
            <h5> Testing </h5>
            <h5> Digial marketing </h5>
          </div>
        </div>
        <div className="child">
          <img src={home} width="100%" height="100%" />
        </div>
      </div>
      <h3>Technology Solutions For Your Problem</h3>
      <div className="secondHalf">
        {data.map((arrVal, i) => (
          <div className="secondHalfCard" key={arrVal.id}>
            <img src={arrVal.image} width="100%" height="100%" />
            <h4> {arrVal.name} </h4>
          </div>
        ))}
      </div>
      <div className="aboutus">
        <h3>About Us</h3>
        <div className="aboutusDesc">
          Welcome to Nebula technology, your number one source for all things in
          Software Solutions. We're dedicated to giving you the very best of
          Software Solutions, with a focus on Java, Android, Spring Hibernate,
          IOS, PHP, Digital Marketing etc. <br />
          <br />
          We have expertise in different domain and we passionate about
          upgrading us in new technologies as well. Our long term goal is
          to_provide end to end service to our clients and make them satisfied
          with our service. <br />
          <br /> We are working with different technologies to implement clients
          innovative ideas in real time environment. We hope you enjoy Our
          Service and products as much as we enjoy offering them to you. If you
          have any questions or comments, please don't hesitate to contact us.
          <h4> Our Clients </h4>
          <div className="ourClients">
            <div className="ourClients_logo">
              <img src={infosys} alt="infosys" width="100%" height="100%" />
            </div>
            <div className="ourClients_logo">
              <img src={itsupport} alt="itsupport" width="100%" height="100%" />
            </div>
            <div className="ourClients_logo">
              <img
                src={digital_matrix}
                alt="digital_matrix"
                width="100%"
                height="100%"
              />
            </div>
            <div className="ourClients_logo">
              <img src={pursho} alt="pursho" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
      <h3>Contact US</h3>
      <div className="contactus">
        <div className="contactus_child">
          <PhoneOutlinedIcon sx={{ fontSize: 60 }} />
          <h6> 8668768612, 8097760688, 7507316272 </h6>
        </div>
        <div className="contactus_child">
          <LocationOnOutlinedIcon sx={{ fontSize: 60 }} />
          <h6>
            CTS No 349, 3rd floor, <br /> Shilavihar Colony Opposite to Durga
            Mata Mandir, <br /> Near Paud Phata Bus Stop, Kothrud, <br />
            Pune, Maharashtra 411038. <br />
            <Divider />
            <h3>
              <Link
                href="https://goo.gl/maps/1Pnsf1FeTR9fS87j7"
                underline="hover"
                color="inherit"
              >
                Google Map Location
              </Link>
            </h3>
          </h6>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2018 - All Rights Reserved - Nebula Technology</p>
        <p>Developed by Pravin Vargad</p>
      </div>
    </div>
  );
}

export default App;
