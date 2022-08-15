import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>buy-At</h1>
        <p>Everything under single umbrella</p>

        <p>Copyrights 2022 &copy; buy-At</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://instagram.com/prranav_aher"
        >
          Instagram
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://youtube.com">
          Youtube
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://facebook.com">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
