import React from 'react'
import { Heading, Subheading, HideOnMobile, Wrapper } from './ComponentLibrary'
import PageSection from './PageSection'
import Blogpost from './Blogpost'
import blogpostsData from '../blogposts.json'

const Thoughts = () => {
  return (
    <PageSection>
      <Wrapper>
        <Heading>My thoughts<HideOnMobile> about code</HideOnMobile>
        </Heading>
        {blogpostsData.map((blogpost) => (
          <Blogpost key={blogpost.title} title={blogpost.title} />
        ))}
        <Subheading>More thoughts</Subheading>
      </Wrapper>

    </PageSection>
  )
}

export default Thoughts