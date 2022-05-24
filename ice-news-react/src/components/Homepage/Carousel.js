import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Jose – Oakland Bay Bridge, United States",
    imgPath:
      "http://localhost:3000/static/media/Carousel%203.2c287dffe5d9ac5ec755.jpg",
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
  let count = 0;

  useEffect(() => {
    setInterval(() => {
      let imagesLength = parseInt(images.length) - 1;

      if (count === imagesLength - 1) {
        setCarouselIndex((prev) => {
          count = 0;
          return 0;
        });
      } else {
        setCarouselIndex((prev) => {
          count = prev;
          return prev + 1;
        });
      }
    }, 50000);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-Item">
        <img src={`${images[carouselIndex].imgPath}`} />
        <div className="news-header-container">
          <div className="news-Category">
            <p>Business</p>
          </div>
          <h3 className="news-item-text">{`${images[carouselIndex].label}`}</h3>
          <div className="news-authors">
            <p>By John Stones</p>
            <p>25-05-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
