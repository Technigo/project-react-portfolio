import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero.jpg';
import profileImage from '../images/portrait.jpg';

const Header = () => {
	return (
		<HeaderStyler>
			<div>
				<h1>Portfolio: Petra</h1>
				<h1>Söderström</h1>
				<h2>frontend</h2>
				<h2>developer</h2>
			</div>
			<img className="profile" src={profileImage} alt="profile-of-Petras" />
		</HeaderStyler>
	)
}

export default Header;

const HeaderStyler = styled.div`
/* BACKGROUND PICTURE */
background: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.062)),
url(${heroImage});
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 50vh;
position: relative;
display: flex;

div {
  position: absolute;  
  top: 11vh;
  left: 5vw;
}

.profile {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  height: auto;
  width: 40vw;
  right: 10vw;
  bottom: -8vh;
	margin-bottom: 6%;
}


@media (min-width: 668px) {
	article {
  top: 10vh;
  }
}


@media (min-width: 1024px) {
  .profile {
    width: 17vw;
    right: 19.2vw;
		margin-bottom: 0;
  }  
}
`
