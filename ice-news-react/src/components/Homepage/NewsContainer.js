import React, {useEffect, useState } from "react";
import { NewsContainer } from "../../styles/NewsContainer.styled";
import Carousel from "./Carousel";
import FeatureNews from "./FeatureNews";
import Checkbox from "./Checkbox";
// import FeatureNewsImage from "./../../assets/Feature1.png";
// import NewsContext from "../../context/newsContext";
import { reverseDate } from "../Homepage/NewsCatListing";

const NewsContainerDiv = () => {
  const [featuredPost, setFeaturedPost] = useState([]);
  // const { newsResult } = useContext(NewsContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://localhost:8080/magnoliaAuthor/.rest/newscontainer/?@FeaturedNews=true"
      );
      const featuredPost = await res.json();
      setFeaturedPost(featuredPost.results.slice(0,2));
    })();
  }, []);

  console.log(featuredPost);
  return (
    <NewsContainer className="news-container">
      <div className="news-container-mini">
        <div className="news-container-item">
          <Carousel />
          <Checkbox />
        </div>
        <div className="news-container-item">
          <h4>Features</h4>
          {featuredPost.length > 0 &&
            featuredPost.map((post, index) => {
              let featuredImage = post.ImageLink["0"]["@link"];
          
              return (
                <FeatureNews image={featuredImage}  id={index}>
                  <div className="feature-news-authors">
                    <p className="feature-title">
                      {" "}
                      {post.Caption}{" "}
                    </p>
                    <p>{post.Author}</p>
                    <p>{reverseDate(post.PublishedDate)}</p>
                  </div>
                </FeatureNews>
              );
            })}

          {/* <FeatureNews>
            <div className="feature-news-authors">
            <p className="feature-title"> Our pick of the best new tech 2022 </p>
              <p>By John Stones</p>
              <p>25-05-2023</p>
            </div>
          </FeatureNews>
          <FeatureNews>
            <div className="feature-news-authors">
            <p className="feature-title"> Our pick of the best new tech 2022 </p>
              <p>by John Stones</p>
              <p>25-05-2023</p>
            </div>
          </FeatureNews> */}
        </div>
      </div>
    </NewsContainer>
  );
};

export default NewsContainerDiv;
