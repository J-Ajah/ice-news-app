import styled from "styled-components";


export const NavigationContainer = styled.div`
  width: 100%;
//   background-color: #D30B0B;

.logo-headerContainer{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top:30px;
}

div.mgnlEditorBar.area.start{
    width:100%;
}

div.mgnlEditorBar.area ~ div.mgnlPlaceholder, div.mgnlEditorBar.area ~ * div.mgnlPlaceholder{
    width:100%;
}

.advertContainer{
    width: 55%;

    img{
        height:70px;
        text-align: center;
    }
}
`