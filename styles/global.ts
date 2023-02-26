import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        /* background-color: #191A19; */
        color: rgb(230, 230, 230);
        --text-color: rgb(230, 230, 230);
        --primary-color: #191A19;
        --secondary-color: #413F42
    }
    #root{
        margin:0 auto;
    }


    body::-webkit-scrollbar {
  width: 0.7em;
}
 
body::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px ; */
  background-color: var(--primary-color);
}
 
body::-webkit-scrollbar-thumb {
background: var(--secondary-color);
  border-radius: 50px;
}
`;
