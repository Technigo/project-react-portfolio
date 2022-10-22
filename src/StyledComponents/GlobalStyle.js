import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

`;

export const SectionContainer = styled.section`
	background-color: ${(props) => props.backgroundColor};
	width: 100vw;
	/* height: 100vh; */
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: auto;
`;

export const SectionParagraph = styled.p`
	color: #21130d;
	font-size: 1rem;
	font-weight: 400;
	line-height: 150%;
`;

export default GlobalStyle;
