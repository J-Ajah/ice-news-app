import { useEffect, useRef, useState } from "react";
import BusinessImage from ".././../assets/Business.jpg";

const images = [
  {
    label: "San Jose – Oakland Bay Bridge, United States",
    imgPath:
    BusinessImage,
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
  let count = useRef(0);
  const isMounted = useIsMounted(false);


  useEffect(() => {
    setInterval(() => { 

        if(isMounted.current){
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

  return (
    <div className="carousel">
      <div className="carousel-Item">
        <img src={`${images[carouselIndex].imgPath}`} alt="main news" />
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

const useIsMounted = ()=>{
    const isMounted = useRef(false);

    useEffect(()=>{
        isMounted.current = true;
        return ()=> isMounted.current = false;
    })

    return isMounted
}


export default Carousel;
