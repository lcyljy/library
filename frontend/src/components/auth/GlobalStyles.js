import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import "../../lib/styles/fonts/nanumsquare.css";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'NanumSquare', sans-serif;
        font-size: 14px;
        color: #323232;
    }
`;

export default GlobalStyles;
