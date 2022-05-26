import React from "react";
import { useNavigate, Navigate} from "react-router-dom";
import { NewsCatListingContainer } from "../../styles/NewsContainer.styled";
import BusinessImage from "./../../assets/Business.jpg";

const NewsCatListing = () => {

  const newsList = [
    {
      author: "Alice Cloe",
      newsTitle: " No path option provided, componentwill be created relative",
      releaseDate: "25-05-2023",
    },
    {
      author: "Alice Cloe",
      newsTitle: " No path option provided, componentwill be created relative",
      releaseDate: "25-05-2023",
    },
    {
      author: "Manolf Cloe",
      newsTitle:
        "The world and it's revolvement around technolgy and it's benefit",
      releaseDate: "05-05-2023",
    },
    {
      author: "Rita Dominic",
      newsTitle: "Will the current rate of the trading currency be maintained",
      releaseDate: "25-05-2022",
    },
    {
      author: "Jephath Cloe",
      newsTitle: " No path option provided, component will be created relative",
      releaseDate: "25-05-2021",
    },
    {
      author: "Jephath Cloe",
      newsTitle: " No path option provided, component will be created relative",
      releaseDate: "25-05-2021",
    },
    {
      author: "Michael Newman",
      newsTitle: " No path option provided, component will be created relative",
      releaseDate: "25-05-2021",
    },
  ];
  return (
    <NewsCatListingContainer>
      {newsList.map((news, id) => {
        return (
          <News
            key={id}
            id={id}
            newsTitle={news.newsTitle}
            author={news.author}
            newsDate={news.releaseDate}
          />
        );
      })}

      <p
        className="see-more"
        onClick={() => {
          alert("Fetching more posts");
        }}
      >
        See more
      </p>
    </NewsCatListingContainer>
  );
};

export default NewsCatListing;

const News = ({ author, newsDate, newsTitle, id }) => {
    const navigate = useNavigate();
  return (
    <div
      className="news"
      onClick={() => {
          navigate(`${id}`, { state: { author, newsDate, newsTitle } });
      }}
    >
      <img src={BusinessImage} alt=" news" />
      <div className="new-captions-author">
        <h4>{`${newsTitle}`}</h4>
        <div className="author">
          <p>
            {" "}
            <span>by {`${author}`} </span>- {`${newsDate}`}
          </p>
        </div>
      </div>
    </div>
  );
};
