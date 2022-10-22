import React from 'react';
import styled from 'styled-components';
import linkedinLogo from '../images/linkedin-logo.svg';
import githubLogo from '../images/github-logo.svg';
import stackoverflowLogo from '../images/stackoverflow-logo.svg';

const Footer = () => {
	return (
		<FooterStyler>
			<div>
				<h3>contact</h3>
				<p>Petra Söderström</p>
				<a className="mail" href="mailto:petrasoderstrom1612@gmail.com">
        petrasoderstrom1612@gmail.com
				</a>
			</div>
			<section>
				<a className="logo-footer" href="https://www.linkedin.com/in/petra-soderstrom" target="_blank" rel="noreferrer">
					<img aria-label="visit my linked in" src={linkedinLogo} alt="linked-in-icon" />
				</a>
				<a className="logo-footer" href="https://github.com/Petrasoderstrom1612" target="_blank" rel="noreferrer">
					<img aria-label="visit my github" src={githubLogo} alt="github-icon" />
				</a>
				<a className="logo-footer" href="https://www.instagram.com/petra_kodar/" target="_blank" rel="noreferrer">
					<img aria-label="visit my github" src={stackoverflowLogo} alt="instagram-icon" />
				</a>
			</section>
		</FooterStyler>
	)
}

export default Footer;

const FooterStyler = styled.footer`
padding-top: 6%;
padding-bottom: 10%;

background-color: rgb(49, 225, 247);

h3{
display: flex;
justify-content: center;
flex-direction: row;
display:table;
margin: 0px auto 0px auto;
}

.mail{
display: flex;
justify-content: center;
flex-direction: row;
}

section{
display: flex;
justify-content: center;
flex-direction: row;
margin-left: 15vw;
margin-right: 15vw;
margin-top: 2vh;
}

.logo-footer{
	width: 20%;
}

img{
	width: 90%;
}

`
