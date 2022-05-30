import React, {useContext, useState} from "react";
import { useNavigate, Navigate} from "react-router-dom";
import NewsContext from "../../context/newsContext";
import { magnoliaHostUrl } from "../../public/config";
import { NewsCatListingContainer } from "../../styles/NewsContainer.styled";
import  Parser from "html-react-parser"

const NewsCatListing = () => {
  const {newsResult} = useContext(NewsContext);

  const [newsList, setNewsList] = useState(newsResult);


  const reverseDate = (actualString) => {
    let publishDate = actualString.slice(0, 10);
    let reverseString = publishDate.split("-").reverse();
    return reverseString.join("-");
  };

  return (
    newsList.length > 0 && (<NewsCatListingContainer>
      {newsList.map((news, id) => {
        return (
          <News
            key={id}
            id={id}
            newsTitle={news.Caption}
            author={news.Author}
            newsDate={reverseDate(news.PublishedDate)}
            image={news.ImageLink["0"]["@link"]}
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
    </NewsCatListingContainer>)
  );
};

export default NewsCatListing;

const News = ({ author, newsDate, newsTitle, id, image}) => {
    const navigate = useNavigate();
  return (
    <div
      className="news"
      onClick={() => {
          navigate(`${id}`, { state: { author, newsDate, newsTitle } });
      }}
    >
      <img src={`${magnoliaHostUrl}${image}`} alt=" news" />
      <div className="new-captions-author">
        <h4>{`${newsTitle.length > 60 ? newsTitle.slice(0,60)+ `...`: newsTitle}`}</h4>
        <div className="author">
          <p>
            {" "}
            <span style={{fontWeight:"500"}}>By {`${author}`} </span> <br/>
            <span style={{fontSize:"15px",position:"relative",top:"7px"}}>Date: {`${newsDate}`} </span>
          </p>
        </div>
      </div>
    </div>
  );
};
