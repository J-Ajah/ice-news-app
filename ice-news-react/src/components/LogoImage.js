import React from "react"
import { magnoliaHostUrl } from "../public/config";


const LogoImage = (props)=>{
    const {image} = props;
    console.log("Logo Image props has been logged: ",props)
    return(
        <img  src={`${magnoliaHostUrl}${image['@link']}`} alt="logoImage"/>
    )
}


export default LogoImage;