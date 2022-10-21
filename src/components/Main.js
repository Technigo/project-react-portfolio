import React from 'react'
import FeaturedProjects from './FeaturedProjects'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Tech from './Tech'

import OtherProjects from './OtherProjects'
import Articles from './Articles'
import OtherThoughts from './OtherThoughts'
import Skills from './Skills'
import Footer from './Footer'

export const Main = () => {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Tech />
			<FeaturedProjects />
			<OtherProjects />
			<Articles />
			<OtherThoughts />
			<Skills />
			<Footer />
		</>
	)
}
