import React from "react";
import { NewsContainer } from "../../styles/NewsContainer.styled";
import Carousel from "./Carousel";
import FeatureNews from "./FeatureNews";

const NewsContainerDiv = () => {
  return (
    <NewsContainer className="news-container">
      <div className="news-container-mini">
        <div className="news-container-item">
          <Carousel />
        </div>
        <div className="news-container-item">
          <h4>Features</h4>
          <FeatureNews>
            <div className="feature-news-authors">
             <p className="feature-title"> Our pick of the best new tech 2022 </p>
              <p>By John Stones</p>
              <p>25-05-2023</p>
            </div>
          </FeatureNews>
          <FeatureNews>
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
          </FeatureNews>

        </div>
      </div>
    </NewsContainer>
  );
};

export default NewsContainerDiv;
