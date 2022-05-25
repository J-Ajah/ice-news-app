import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 85%;
  margin: 30px auto 0px auto;


  .news-container-mini {
    display: flex;
    width: 100%;
    height: 100%;

    .news-container-item {
      width: 40%;
      box-sizing: border-box;
    }

    .news-container-item:first-child {
      width: 100%;
      height: 100%;
      margin: 0 50px 0px 0px;
      position: relative;
      .carousel {
        .carousel-Item {
            img {
            width: 100%;
          }

          .news-header-container {
            position: relative;
            padding-left: 30px;
            padding-right: 30px;
            bottom: 240px;
            .news-Category {
              background-color: #d30b0b;
              width: 100px;
              color: white;
              p {
                font-size: small;
                text-align: center;
                padding: 5px 0;
                text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
              }
            }
            .news-item-text {
              color: white;
              font-size: 30px;
              text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
            }
            .news-authors {
              color: #fbfbfb;
            }
          }
        }
      }

      .Checkbox-container{
          position: relative;
          width: 100%;
          bottom: 190px;
      }
    }


    .news-container-item:last-child {
        h4{
            padding: 0;
            margin: 0;
            text-align: right;
            font-size: 20px;
            opacity: 0.7;
        }

        .feature-News{
            position: relative;
             width: 100%;
             margin: 10px;    
             img{
                 border-radius: 10px;            
                 width: 100%;
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
  }
`;


export const NewsCatListingContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   position: relative;
   width: 85%;
   margin: 0 auto;
   border-radius: 10px;
   bottom: 150px;
   background-color: #F9F9F9;
   padding: 10px;

   .news{
       width: 80%;
       margin: 40px;
       border-radius: 10px;
       background-color: white;
       box-sizing: border-box;
       box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
       cursor: pointer;
       img{
           width: 100%;
           border-radius: 10px 10px 0px 0px;
       }

       .new-captions-author{
           padding: 10px 15px;
           height: 110px;
            h4{
                margin: 0;
                color: #3c3c3c;
            }

            .author{
                margin: 20px 0px 0px 0px;
            }
       }
   }

   .see-more{
       grid-column: 1/-1;
       text-align: right;
       cursor: pointer;
       padding-right: 40px;
   }



`