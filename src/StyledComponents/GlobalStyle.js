import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
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
	height: 50vh;
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
	align-self: center;
	padding: 2rem;
`;

export const Title = styled.div`
	background-color: #0008c1;
	color: #e6cba8;
	font-size: 1.5rem;
	font-weight: 700;
	align-self: center;
	padding: 0.8rem;
	border-radius: 10px;
`;

export const SubTitle = styled.h2`
	color: #21130d;
`;

export const ProjectDesc = styled.p`
	color: #21130d;
	font-weight: 550;
	line-height: 150%;
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const Tags = styled.p`
	color: #fdf0e0;
	font-weight: bold;
	background-color: #5f9df7;
	font-size: 1rem;
	line-height: 1rem;
	padding: 4px;
	margin: 3px;
	border-radius: 5px;
`;

export const Footer = styled.div`
	background-color: whitesmoke;
	width: 100vw;
	height: 30vh;
	display: flex;
	flex-direction: column;
	overflow: auto;
	padding: 2rem;
`;

export default GlobalStyle;
