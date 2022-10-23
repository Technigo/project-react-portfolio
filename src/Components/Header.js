import React from 'react';
import {
	StyledHeader,
	HeaderText,
	IconWrapper,
} from 'StyledComponents/Header.style';
import { FaLinkedin, FaGithubSquare, FaStackOverflow } from 'react-icons/fa';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderText fontSize="3rem" fontWeight="800">
				Jessica Mo
				<span
					style={{
						fontWeight: '600',
						fontSize: '2rem',
					}}
				>
					FrontEnd Developer
				</span>
				<span
					style={{
						fontWeight: '600',
						fontSize: '1.5rem',
					}}
				>
					with experience in Operations
				</span>
			</HeaderText>
			<IconWrapper>
				<a
					href="https://www.linkedin.com/in/jessica-mo-29508a85/"
					target="blank"
				>
					<FaLinkedin size="2rem" color="whitesmoke" />
				</a>
				<a href="https://github.com/jessnmo" target="blank">
					<FaGithubSquare size="2rem" color="whitesmoke" />
				</a>
				<a href="https://stackoverflow.com/users/19384341/jmo" target="blank">
					<FaStackOverflow size="2rem" color="whitesmoke" />
				</a>
			</IconWrapper>
			<img src="" alt="" />
		</StyledHeader>
	);
};

export default Header;
