import React from "react"
import { magnoliaHostUrl } from "../../public/config";


const LogoImage = ({image})=>{

    const ImagePath = `${magnoliaHostUrl}${image['@link']}`;
    return(
        <div>
            <img  src={ImagePath} alt="logoImage"/>
        </div>
    )
}


export default LogoImage;