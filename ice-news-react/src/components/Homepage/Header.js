import React from 'react';
import {NavigationLogoContainer} from  "../../styles/Navbar.styled"
import { EditableArea } from "@magnolia/react-editor";

const Header = (props)=>{
    const {title,logo} = props;
    console.log("Header Title is logged:", title)
     return(
        title && <NavigationLogoContainer className='navigationTitle'>
         <div className='logo-div'>{logo && <EditableArea  className="logo-headerContainer" content={logo}/>}</div>
        </NavigationLogoContainer>
     )
}

export default Header;