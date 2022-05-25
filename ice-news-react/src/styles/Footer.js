import styled from "styled-components";

export const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 522px;
  background-color: #383434;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top:30px;

  .main-magnolia-editor {
    width: 100%;
  }

  .footerSection {
    display: grid;
    grid-template-columns: 29% 1fr 100px;
    width: 85%;
    margin: 0 auto;

    .footer-content-container {
      width: 100%;
      height: 350px;
      margin: auto 0;

      .details-container {
        position: relative;
        box-sizing: border-box;
        font-size: 16px;

        .text {
          line-height: 20px;
          padding-right: 40px;
          margin-top: 50px;
        }

        .location {
          margin-top: 50px;
        }

        .phoneNumber {
          margin-top: 50px;
        }
      }
    }

    .footer-content-container > .popular-news {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
      justify-items: center;

      .popular-item {
        width: 100%;
        height: 170px;
        background-color: #423c3c;
        margin: 10px 10px 10px 10px;
        box-sizing: border-box;
        border-radius: 10px;

        .popular-post-title{
            padding:0px 17px 0px 17px;
            margin-bottom: 20px;
            font-size: 17px;
            color: #e6e6e6;
        }

        .popular-author{
            padding-left: 19px;
        }
      }
    }


    .copyright {
        grid-column: 1/-1;
        text-align: center;
        margin-top: 100px;
    }

    .social-container{
        display: flex;
        flex-direction: column;
        margin: auto 0;

    }


    .logo-icons{
        text-align: right;
        margin: 30px 0px 30px 0px;
        height 100%;
    }


  }

`;
