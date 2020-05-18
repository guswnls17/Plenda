import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export default createGlobalStyle`

    ${reset};

    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }

    body {}

    a { 
        font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
        text-decoration:none;
    }

    button {
        outline: none;
        border: none;
    }

    input:focus {
        outline:none;
    }

    h1 {
        font-family: "Sen", "Noto Sans KR", 'Noto Sans', sans-serif;
        word-break: keep-all;
        white-space: pre-line;
    }

    p {
        font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
        /* word-break: break-all;
        word-wrap: break-word;
        white-space: pre-line; */
    }
`;