import React from 'react'
import { Heading, Subheading } from './ComponentLibrary'
import PageSection from './PageSection'
import Wrapper from './Wrapper'

const Thoughts = () => {
  return (
    <PageSection>
      <Wrapper>
        <Heading>My thoughts about code</Heading>
        <Subheading>More thoughts</Subheading>
      </Wrapper>
      {/* Todo: maybe read "blog posts" from another json file? like in Projects.js */}
    </PageSection>
  )
}

export default Thoughts