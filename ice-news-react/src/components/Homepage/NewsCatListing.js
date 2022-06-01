import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NewsContext from "../../context/newsContext";
import { magnoliaHostUrl } from "../../public/config";
import { NewsCatListingContainer } from "../../styles/NewsContainer.styled";

const reverseDate = (actualString) => {
  let publishDate = actualString.slice(0, 10);
  let reverseString = publishDate.split("-").reverse();
  return reverseString.join("-");
};


const NewsCatListing = () => {
  const { newsResult, selectedCategories } = useContext(NewsContext);

  let result = [];
  const [newsList, setNewsList] = useState(newsResult);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!Object.values(selectedCategories).includes(true)) {
      console.log(selectedCategories);
      console.log("This has been logged");
      setNewsList((prev) => {
        console.log(prev);
        return newsResult;
      });
      return;
    }
    showNewsCategory();
  }, [selectedCategories]);

  useEffect(() => {
    setNewsList(newsList);
  }, [newsList]);



  const showNewsCategory = () => {
    Object.entries(selectedCategories).forEach(([key, value]) => {
      return newsResult.map((value, currentIndex) => {
        let category = value["@path"].split("/")[3].toLowerCase();
        if (category === key && selectedCategories[key] === true) {
          return result.push(value);
        }
      });
    });

    setNewsList(result);
  };
  console.log(newsList);
  return (
    newsList.length > 0 && (
      <NewsCatListingContainer>
        {newsList.map((news, id) => {
          return (
            <News
              key={id}
              id={id}
              newsTitle={news.Caption}
              author={news.Author}
              content={news.Content}
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
      </NewsCatListingContainer>
    )
  );
};

export {reverseDate};

export default NewsCatListing;
 

const News = ({ author, newsDate, newsTitle, id, image, content }) => {
  const navigate = useNavigate();
  return (
    <div
      className="news"
      onClick={() => {
        navigate(`${id}`, {
          state: { author, newsDate, newsTitle, content, image },
        });
      }}
    >
      <img src={`${magnoliaHostUrl}${image}`} alt=" news" />
      <div className="new-captions-author">
        <h4>{`${
          newsTitle.length > 60 ? newsTitle.slice(0, 60) + `...` : newsTitle
        }`}</h4>
        <div className="author">
          <p>
            {" "}
            <span style={{ fontWeight: "500" }}>By {`${author}`} </span> <br />
            <span
              style={{ fontSize: "15px", position: "relative", top: "7px" }}
            >
              Date: {`${newsDate}`}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
