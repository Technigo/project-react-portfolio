import React from 'react';
import Header from 'Components/Header';
import About from 'Components/About';
import Tech from 'Components/Tech';
import { FeaturedProjects } from 'Components/FeaturedProjects';
import OtherProjects from 'Components/OtherProjects';
import Skills from 'Components/Skills';

const App = () => {
	return (
		<>
			<Header />
			<About />
			<Tech />
			<FeaturedProjects />
			<OtherProjects />
			<Skills />
		</>
	);
};

export default App;
