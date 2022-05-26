import React from "react";
import FeatureNewsImage from "./../../assets/Feature1.png"

const FeaturesNews = ({children}) => {
  console.log(children);
  return (
    <div className="feature-News">
      <img src={FeatureNewsImage} alt="Feature1" />
       {children}
    </div>
  );
};

export default FeaturesNews;
