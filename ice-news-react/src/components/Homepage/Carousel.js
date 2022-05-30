import { useContext, useEffect, useRef, useState } from "react";
import NewsContext from "../../context/newsContext";
import { magnoliaHostUrl } from "../../public/config";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { newsResult } = useContext(NewsContext);
  const [news, setNews] = useState(newsResult);
  let count = useRef(0);
  const isMounted = useIsMounted(false);

  useEffect(() => {
    setInterval(() => {
      if (isMounted.current) {
        let imagesLength = parseInt(news.length) - 1;

        if (count.current === imagesLength - 1) {
          setCarouselIndex((prev) => {
            count.current = 0;
            return 0;
          });
        } else {
          setCarouselIndex((prev) => {
            count.current = prev;
            return prev + 1;
          });
        }
      }
    }, 9000);
  }, []);

const reverseDate = (actualString) => {
    let publishDate = actualString.slice(0, 10);
    let reverseString = publishDate.split("-").reverse();
    return reverseString.join("-");
  };

  return (
    news.length > 0 && (
      <div className="carousel">
        <div className="carousel-Item">
          <img
            src={`${magnoliaHostUrl}${news[carouselIndex].ImageLink[0]["@link"]}`}
            alt="main news"
          />
          <div className="news-header-container">
            <div className="news-Category">
              <p>{news[carouselIndex]["@path"].split("/")[3]}</p>
            </div>
            <h3 className="news-item-text">{`${news[carouselIndex].Caption}`}</h3>
            <div className="news-authors">
              <p>
                <span>By </span>
                {`${news[carouselIndex].Author}`}
              </p>
              <p>{`${reverseDate(news[carouselIndex].PublishedDate)}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  });

  return isMounted;
};

export default Carousel;
