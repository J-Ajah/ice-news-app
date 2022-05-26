import React, { useEffect, useState } from "react";
import LogoImage from "./Homepage/LogoImage";
import { magnoliaHostUrl } from "./../public/config";

const FooterSection = ({ title }) => {
  const [footerLogoImage, setFooterLogoImage] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `${magnoliaHostUrl}/magnoliaAuthor/.rest/pages/Ice-news/header?@name=adImage`
      );
      const response = await data.json();
      setFooterLogoImage(response);
      //   setFooterLogoImage(footerLogoImage["0"].logo["0"].image["@link"]);
    })();
  }, []);

  return (
    <div className="footerSection">
      <div className="footer-content-container">
        <div className="image-container">
          <img
            src={`${magnoliaHostUrl}${footerLogoImage["0"]?.logo["0"].image["@link"]}`}
            alt="logoImage"
          />
        </div>
        <div className="details-container">
          <p className="text">
            Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <p className="location">York,NY 10010</p>
          <p className="phoneNumber">
            Phone: +95 (0) 123 456 789 <br /> <br /> Cell: +95 (0) 123 456 789
          </p>
        </div>
      </div>
      <div className="footer-content-container footer-posts">
        <div className="popular-news">
          <PopularNews/>
          <PopularNews/>
          <PopularNews/>
          <PopularNews/>
        </div>
      </div>
      <div className="footer-content-container last">
        <div className="social-container">
          <div className="logo-icons">
            <img
              src={`${magnoliaHostUrl}${footerLogoImage["00"]?.fbIcon["@link"]}`}
              alt="LogoImage"
            />
          </div>
          <div className="logo-icons">
            <img
              src={`${magnoliaHostUrl}${footerLogoImage["00"]?.linkedInIcon["@link"]}`}
              alt="LinkedIn Icon"
            />
          </div>
          <div className="logo-icons">
            <img
              src={`${magnoliaHostUrl}${footerLogoImage["00"]?.messengerIcon["@link"]}`}
              alt="Messenger Icon"
            />
          </div>
        </div>
      </div>
      <p className="copyright">Copyright ©2022 All rights reserved</p>
    </div>
  );
};

export default FooterSection;

const PopularNews = () => {
  return (
    <div className="popular-item">
      <h6 className="popular-post-title">
        Lorem ipsum dolor sit amet, nsectetur adipiscing elit nsectetur
        adipiscing elit,
      </h6>
      <p className="popular-author">by Alice Clone - Jun 19, 2020</p>
    </div>
  );
};
