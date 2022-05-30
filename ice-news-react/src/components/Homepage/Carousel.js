import { useEffect, useRef, useState } from "react";
import { magnoliaHostUrl } from "../../public/config";
import BusinessImage from ".././../assets/Business.jpg";

const images = [
  {
    label: "San Jose – Oakland Bay Bridge, United States",
    imgPath: BusinessImage,
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [news, setNews] = useState([]);
  let count = useRef(0);
  const isMounted = useIsMounted(false);

  useEffect(() => {
    (async () => {
      const news = await fetch(
        "http://localhost:8080/magnoliaAuthor/.rest/newscontainer"
      );
      const response = await news.json();
      console.log(response.results[2].ImageLink[0]["@link"]);

      setNews(response.results);
    })();

    setInterval(() => {
      if (isMounted.current) {
        let imagesLength = parseInt(images.length) - 1;

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
    }, 5000);
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
              <p>{`${news[carouselIndex].Author}`}</p>
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
