import styled from 'styled-components';

export const StyledHeader = styled.div`
	background: lightblue;
	position: relative;
	height: 50vh;
`;

export const Profile = styled.img`
	height: 200px;
	width: 200px;
	position: absolute;
	right: 100px;
	top: 60%;
	border: 2px solid whitesmoke;
	border-radius: 50%;
`;

export const HeaderText = styled.div`
	font-size: ${(props) => props.fontSize};
	position: absolute;
	top: 5rem;
	left: 4rem;
	color: whitesmoke;
	font-weight: ${(props) => props.fontWeight};
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
