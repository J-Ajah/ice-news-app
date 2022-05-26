import styled from "styled-components";

const NewsDetails = styled.div`
 width: 85%;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 460px;

 .details-info{
     display: flex;
     flex-direction: column;
     width: 100%;
     margin-top: 30px;

     :first-child{
        width:95%;
         img{
             width: 100%;
         }
     }
     .adImage{
       margin: 40px auto;
   }
 }


 .news-text-container{
     h3{
         font-size: 28px;
     }

     .news-text{
         height: 30px;
         font-size: 18px;
         text-align: justify;
         box-sizing: border-box;
     }
 }




 .authors-other-news{
     box-sizing: border-box;

     h3{
         margin: 0;
         text-align: right;
         padding:0px 10px 5px 0px;
     }
 }

 .other-news{
    //  Other news styles starts here

    .feature-News{
        position: relative;
         width: 100%;
         margin-bottom:10px;
         img{
             border-radius: 10px;            
             width: 100%;ty
             box-sizing: border-box;
             background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(17,17,16,0.5217437316723564) 100%);     
         }

         .feature-news-authors{
              position: absolute;
              bottom : 0;
              color: white;

              .feature-title{
                  position: relative;
                  font-size: 20px;
                  color: white;
              }
              p{
                  margin: 5px 15px;
                  font-size: 14px;
                  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
              }

              p: last-child{
                  position: relative;
                  bottom: 5px;
              }
         }
    }
 }

`;

export default NewsDetails;
