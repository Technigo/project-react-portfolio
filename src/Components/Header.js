import React from 'react';
import { StyledHeader, HeaderText } from 'StyledComponents/Header.style';

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
			<img src="" alt="" />
		</StyledHeader>
	);
};

export default Header;
