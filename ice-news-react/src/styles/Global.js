import styled from "styled-components";


export const GlobalContainer = styled.div`
.mainNavContainer{
    background-color: #D30B0B;
    height:83px;


    .mini-container{
        display: flex;
        width:  85%;
        margin: 0 auto;
        position: relative;
        justify-content: space-between;

        ul{
            list-style-type: none;
            width:50%;
            color: white;
            font-size:18px;
            padding-left:20px;
            margin:auto 0px;
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
            position: relative;
            height: 83px;
            right:0;
            // margin: auto 0px auto 0px;    
            img{
                margin: 20px;
                width:39px;
                height:40px;
                cursor: pointer;
            }
        }
    }
   
}

a{
    text-decoration: none;
    color: white;
}



// News Details globel styles starts here
.details-headerContainer{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    align-items: center;
}
}

`