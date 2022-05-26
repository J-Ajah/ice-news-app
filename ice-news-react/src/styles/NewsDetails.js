import styled from "styled-components"


const NewsDetails = styled.div`
 width: 85%;
 margin: 0 auto;
 border: solid 2px tomato;
 display: grid;
 grid-template-columns: 1fr 460px;

 .details-info{
     width: 100%;
     border: solid 1px blue;
     margin-top: 30px;

     :first-child{
         padding-right: 40px;
         img{
             width: 100%;
         }
     }
 }

`



export default NewsDetails;