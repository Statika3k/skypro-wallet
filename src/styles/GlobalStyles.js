import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  cursor: pointer;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  background-color: #F4F5F6;
}

#root {
  min-height: 100vh;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
`;
