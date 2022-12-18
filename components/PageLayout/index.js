import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Header";

const GlobalStyles = createGlobalStyle`
    @font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    html {
        --red: #ff0000; 
        --black: #393939; 
        --white: #FFFFFF; 
        --grey: #3A3A3A; 
        --gray: var(--grey);
        --lightGrey: #E1E1E1; 
        --lightGray: var(--lightGrey);
        --green: #008000;
        --offWhite: #EDEDED;
        --maxWidth: 1000px;
        --bs: 0 12px 24px, 0, rgba(0,0,0,0.09);
        @media (max-width: 700px) {
            font-size: 0.7rem;
        }
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none; 
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    s {
        color: var(--green);
        text-decoration: none;
    }

`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function PageLayout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
