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
	height: 40vh;
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

export const Title = styled.h2`
	background-color: #0008c1;
	color: #e6cba8;
	align-self: center;
	padding: 0.8rem;
	border-radius: 10px;
`;

export default GlobalStyle;
