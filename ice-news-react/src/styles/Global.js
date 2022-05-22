import styled from "styled-components";


export const GlobalContainer = styled.div`
.mainNavContainer{
    display: flex;
    background-color: #D30B0B;
    height:83px;
    ul{
        list-style-type: none;
        width:50%;
        color: white;
        font-size:18px;
        padding-left:20px;
        margin:auto 70px;
        li{
            display: inline-block;
            margin-left:40px;
            font-style: normal;
            font-weight: 400;

            
        }
    }

    .searchContainer{
        border: solid 1px white;
        height:32px;
        margin: auto 0;
        background-color: #fff;
        border-radius: 5px;
        padding-left:8px;
        padding-right: 5px;

        input::placeholder{
            color: #000;
            opacity: 0.7;
        }
        img{
            cursor:pointer;
        }

    }

    .social-Icons{
        text-align: center;
        height: 83px;
        margin: auto 0px auto 50px;


        img{
            margin: 20px;
            width:39px;
            height:40px;
            cursor: pointer;
        }
    }
}

a{
    text-decoration: none;
    color: white;
}

`