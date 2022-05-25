import React from "react";
import { NewsCatListingContainer } from "../../styles/NewsContainer.styled";
import BusinessImage from "./../../assets/Business.jpg";

const NewsCatListing = () => {
  return (
    <NewsCatListingContainer>
      <News />
      <News />
      <News />
      <News />
      <News />
      <p className="see-more" onClick={()=>{alert("Fetching more posts")}}>See more</p>
    </NewsCatListingContainer>
  );
};

export default NewsCatListing;

const News = () => {
  return (
    <div className="news">
      <img src={BusinessImage} alt=" news" />
      <div className="new-captions-author">
        <h4>
          No path option provided, componentwill be created relative to the
          current folder.
        </h4>
        <div className="author">
          <p>by Alice Cloe - Jun 19, 2022</p>
        </div>
      </div>
    </div>
  );
};
