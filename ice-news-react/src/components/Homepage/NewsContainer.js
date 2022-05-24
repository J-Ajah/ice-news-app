import React from "react"
import {NewsContainer} from  "../../styles/NewsContainer.styled"
import Carousel from "./Carousel"



const NewsContainerDiv = ()=>{
    return(
        <NewsContainer className="news-container">
             <div className="news-container-mini">
                 <div className="news-container-item">
                    <Carousel/>
                 </div>
                 <div className="news-container-item">
                     <h4>Features</h4>
                     <div className="feature-News">
                        <img src=""/>
                     </div>
                     <div className="feature-News">

                     </div>
                     <div className="feature-News">

                     </div>
                 </div>
             </div>
        </NewsContainer>
    )
}


export default NewsContainerDiv;