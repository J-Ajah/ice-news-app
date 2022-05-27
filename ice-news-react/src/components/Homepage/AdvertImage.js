import React from "react"
import { magnoliaHostUrl } from "../../public/config";


const AdvertImage = (props)=>{
    const {advertImage} = props;
    const srcVal = `${magnoliaHostUrl}${advertImage['@link']}`
    console.log(srcVal)
    return(
        <div className="advertContainer">
            <img  style={{width:'100%'}} src={srcVal} alt="logoImage"/>
        </div>
    )
}


export default AdvertImage;