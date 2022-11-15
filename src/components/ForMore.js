/* eslint-disable no-unused-vars */
import React from 'react';
import Logos from './Logos';

const ForMore = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <section>
      <h2>For more</h2>
      <Logos
        style={{ position: 'static' }}
        section="for-more"
        githubLogo={githubLogo}
        linkedinLogo={linkedinLogo} />
    </section>
  )
}

export default ForMore;