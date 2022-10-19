import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/*    <OuterWrapper>
        <InnerWrapper>
          <About />
          <Tech />
          <FeaturedProjects />
          <OtherProjects />
          <Articles />
          <Skills />
        </InnerWrapper>
      </OuterWrapper> */}
      <Footer />
    </>
  )
}
