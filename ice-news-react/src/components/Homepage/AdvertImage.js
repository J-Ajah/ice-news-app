import React from "react"
import { magnoliaHostUrl } from "../../public/config";


const AdvertImage = (props)=>{
    const {advertImage} = props;
    console.log("Advert Image props has been logged: ",props)
    return(
        <div className="advertContainer">
            <img  style={{width:'100%'}} src={`${magnoliaHostUrl}${advertImage['@link']}`} alt="logoImage"/>
        </div>
    )
}


export default AdvertImage;