import React, { useEffect, useState } from "react";
import NavigationContainer from "./NavigationContainer";
import { ClipLoader } from "react-spinners";
import { GlobalContainer } from "./../styles/Global";
import { useLocation } from "react-router-dom";
import NewsDetails from "../styles/NewsDetails";
import { magnoliaHostUrl } from "../public/config";

const NewsDetailPage = (props) => {
  const [navBarComponent, setNavbarNavigationBar] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    if (navBarComponent.length === 0) {
      (async () => {
        const response = await fetch(
          "http://localhost:8080/magnoliaAuthor/.rest/pages/Ice-news/header"
        );
        const navItems = await response.json();
        console.log(navItems);
        let navItemsValue = {
          navigation1: navItems["00"].navigation1,
          navigation2: navItems["00"].navigation2,
          navigation3: navItems["00"].navigation3,
          navigation4: navItems["00"].navigation4,
          navigation5: navItems["00"].navigation5,
          messengerIcon: navItems["00"].messengerIcon,
          linkedInIcon: navItems["00"].linkedInIcon,
          fbIcon: navItems["00"].fbIcon,
        };
        setNavbarNavigationBar(navItemsValue);

        // Fetch current News
        (async () => {
          const currentNews = await fetch(
            "http://localhost:8080/magnoliaAuthor/.rest/newscontainer"
          );
          const response = await currentNews.json();
          const newsInfo ={
              img: response.results["0"]?.ImageLink[0]["@link"]
          }
          setNews(newsInfo);
        })();

        setLoading(false);
      })();
    }
  }, [navBarComponent]);
console.log(news.img)
  return (
    <GlobalContainer>
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
            <img className="news-image" src={`${magnoliaHostUrl}`+news.img} alt="NewsImage" />
          )}
        </div>
        <div className="details-info"></div>
      </NewsDetails>
    </GlobalContainer>
  );
};

export default NewsDetailPage;
