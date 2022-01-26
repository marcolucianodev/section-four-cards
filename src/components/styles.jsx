import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Kumbh Sans', sans-serif;
        background-color: #fafafa;
    }

    .container {
        display: flex;
        padding: 50px 0;
        justify-content: center;

        .container--col-single {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container-col-double {
            display: flex;
            flex-direction: column;
            justify-content: center;   
        }
    }

    @media (max-width: 1023px) {
        .container {
            flex-direction: column;
        }

        .container--col-single {
            
        }
    }

`;