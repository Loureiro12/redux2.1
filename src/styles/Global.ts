import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 30;
        margin: 30;
        text-align: center;
    }
    body{
        background: #ccc;
        font-family: 'Roboto', sans-serif;
    }
    h1{
        font-size: 20px;
        text-align: center;
    }

    p{
        font-size: 16px;
    }

    li {
    list-style-type: none;
    font-size: 16px;
    }

    button{
    color: #616165;
     font-size: 14px;
     font-weight: bold;
     line-height: 25px;
     text-decoration: none;
     text-transform: uppercase;
     text-shadow:1px 1px 0 #FFF;
     padding: 5px 15px;

    }
`;
