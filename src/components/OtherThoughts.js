import React from 'react';
import styled from 'styled-components';

const OtherThoughts = () => {
	return (
		<AboutStyler className="innerwrapper">
			<div>
				<h3>my top 3 websites for learning coding</h3>
				<h4>w3schools</h4>
				<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">www.w3schools.com
				</a>
				<h4>geeksforgeeks</h4>
				<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">www.w3schools.com
				</a>
				<h4>w3schools</h4>
				<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">www.w3schools.com
				</a>
			</div>
		</AboutStyler>
	)
}

export default OtherThoughts;

const AboutStyler = styled.div`

div {
	display: flex;
	flex-direction: column;
	align-items: center;
}
`