import React, { useEffect, useRef, useState } from "react";
import NavigationContainer from "./NavigationContainer";
import { ClipLoader } from "react-spinners";
import { GlobalContainer } from "./../styles/Global";
import { useLocation } from "react-router-dom";
import NewsDetails from "../styles/NewsDetails";
import { magnoliaHostUrl } from "../public/config";
import FeaturesNews from "./Homepage/FeatureNews";
import Parser from "html-react-parser";
import AdImage from "../assets/DetailsAdvert.jpg";
import { Footer } from "./../styles/Footer";
import FooterSection from "./FooterSection";
import { NavigationLogoContainer } from "./../styles/Navbar.styled";
import LogoImage from "./Homepage/LogoImage";
import AdvertImage from "./Homepage/AdvertImage";
import { reverseDate } from "./Homepage/NewsCatListing";

const NewsDetailPage = (props) => {
  const location = useLocation();
  const [navBarComponent, setNavbarNavigationBar] = useState([]);
  const [news, setNews] = useState(location.state);
  const [loading, setLoading] = useState(true);
  const [featureNews, setFeatureNews] = useState([]);
  const [showOtherNews, setShowOtherNews] = useState(false);
  const componentMounted = useRef(true);

  // Fetch Feature News
  const fetchFeatureNews = async () => {
    const featureNews = await fetch(
      `http://localhost:8080/magnoliaAuthor/.rest/newscontainer/?q=${news.author}`
    );
    const response = await featureNews.json();
    
    setFeatureNews(response.results);
    // SETS THE STATE TO SHOW OTHER NEWS FROM AUTHOR IF LENGTH IS GREATER THAN 1
    if(response.results.length > 1){
      setShowOtherNews(true)
    }
    console.log(response)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (navBarComponent.length === 0) {
      (async () => {
        const response = await fetch(
          "http://localhost:8080/magnoliaAuthor/.rest/pages/Ice-news/header"
        );
        const navItems = await response.json();

        let navItemsValue = {
          navigation1: navItems["00"]?.navigation1,
          navigation2: navItems["00"]?.navigation2,
          navigation3: navItems["00"]?.navigation3,
          navigation4: navItems["00"]?.navigation4,
          navigation5: navItems["00"]?.navigation5,
          messengerIcon: navItems["00"]?.messengerIcon,
          linkedInIcon: navItems["00"]?.linkedInIcon,
          fbIcon: navItems["00"]?.fbIcon,
          title: navItems["@name"],
          logo: navItems["0"]?.logo,
        };
        setNavbarNavigationBar(navItemsValue);

        fetchFeatureNews();
        setLoading(false);
      })();
    }

    return () => {
      componentMounted.current = false;
    };
  }, [navBarComponent]);

  //   console.log(
  //     "Logo content has been logged: ",
  //     navBarComponent.logo["00"].advertImage
  //   );
  return (
    <GlobalContainer>
      {Object.keys(navBarComponent).length > 0 && (
        <NavigationLogoContainer className="details-headerContainer">
          <LogoImage image={navBarComponent.logo["0"]?.image} />
          <AdvertImage advertImage={navBarComponent.logo["00"].advertImage} />
        </NavigationLogoContainer>
      )}
      {loading ? (
        <ClipLoader size={50} color="#1B98E0" />
      ) : (
        <NavigationContainer
          navigation1={navBarComponent?.navigation1}
          navigation2={navBarComponent?.navigation2}
          navigation3={navBarComponent?.navigation3}
          navigation4={navBarComponent?.navigation4}
          navigation5={navBarComponent?.navigation5}
          fbIcon={navBarComponent?.fbIcon}
          linkedInIcon={navBarComponent?.linkedInIcon}
          messengerIcon={navBarComponent?.messengerIcon}
        />
      )}

      <NewsDetails>
        <div className="details-info">
          {loading ? (
            <ClipLoader size={50} color="#1B98E0" />
          ) : (
            <img
              className="news-image"
              src={`${magnoliaHostUrl}` + news.image}
              alt="NewsImage"
            />
          )}

          <div className="news-text-container">
            <h3>{news.newsTitle}</h3>
            <p style={{ fontWeight: "bold" }}>
              <span>Author:</span> {news.author}
            </p>
            <p style={{ fontWeight: "bold" }}>
              <span>Published Date:</span> {news.newsDate}
            </p>
            <p className="news-text">{Parser("" + news?.content)}</p>
          </div>
        </div>
        <div className="details-info">
          <div className="authors-other-news">
            <h3> {showOtherNews && "Other news from Author"}</h3>
          </div>

          <div className="other-news">
            {
              featureNews.length > 0 && (
                 featureNews.map((newsItem, index)=>{
                    if(newsItem.Caption === news.newsTitle){
                      return ""
                    }
                      return(
                        <FeaturesNews image={newsItem.ImageLink["0"]["@link"]}>
                        <div className="feature-news-authors">
                          <p className="feature-title">
                            {" "}
                            {newsItem.Caption}{" "}
                          </p>
                          <p>{newsItem.Author}</p>
                          <p>{reverseDate(newsItem.PublishedDate)}</p>
                        </div>
                      </FeaturesNews>
                      )
                 })
              )
            }
           
          </div>
          {/* Advert Image starts here */}
          <img className="adImage" src={AdImage} alt="advertImage" />
        </div>
      </NewsDetails>
      <Footer>
        <FooterSection />
      </Footer>
    </GlobalContainer>
  );
};

export default NewsDetailPage;
