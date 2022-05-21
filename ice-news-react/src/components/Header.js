import React from 'react';
import {NavigationContainer} from  "../styles/Navbar.styled"
import { EditableArea } from "@magnolia/react-editor";

const Header = (props)=>{
    const {title,logo} = props;
    console.log(props);
     return(
        title && <NavigationContainer className='navigationTitle'>
         <div className='logo-div'>{logo && <EditableArea  className="logo-headerContainer" content={logo}/>}</div>
        </NavigationContainer>
     )
}

export default Header;