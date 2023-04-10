import { Title } from 'StyledComponents/GlobalStyle';
import { Footer } from 'StyledComponents/GlobalStyle';
import { FooterP } from 'StyledComponents/Footer.style';

const Contact = () => {
	return (
		<Footer>
			<Title>Click to Connect</Title>
			<FooterP
				href="https://www.linkedin.com/in/jessica-mo-29508a85/"
				target="_blank"
			>
				Jessica Mo
			</FooterP>
			<FooterP href="https://github.com/jessnmo" target="_blank">
				Check out my code
			</FooterP>

			<FooterP href="tel:+31628777569">+31628777569</FooterP>
			<FooterP href="mailto:jessicamo92.gmail.com?subject=Hey%20Jess, Let's%20Connect">
				jessicamo92@gmail.com
			</FooterP>
		</Footer>
	);
};

export default Contact;
