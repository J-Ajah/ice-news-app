import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 85%;
  margin: 30px auto 0px auto;
  height: 500px;

  .news-container-mini {
    display: flex;
    width: 100%;
    height: 100%;

    .news-container-item {
      width: 40%;
      border: solid 1px green;
      box-sizing: border-box;
    }

    .news-container-item:first-child {
      width: 100%;
      height: 100%;
      margin: 0 50px 0px 0px;

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
    }


    .news-container-item:last-child {
        h4{
            padding: 0;
            margin: 0;
            text-align: right;
        }
    }
  }
`;
