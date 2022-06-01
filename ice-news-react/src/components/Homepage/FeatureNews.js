import React from "react";
import { magnoliaHostUrl } from "../../public/config";


const FeaturesNews = ({children,image}) => {

  return (
    <div className="feature-News">
      <img src={`${magnoliaHostUrl}${image}`} alt="Feature1" />
       {children}
    </div>
  );
};

export default FeaturesNews;
