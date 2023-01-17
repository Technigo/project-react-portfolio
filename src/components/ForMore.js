import React from 'react';
import { MediumHeadline } from 'styles/GlobalStyles';

/* Images */
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import stackoverflow from '../assets/stackoverflow.png';

/* Links */
import SocMedLinks from './SocMed';

const ForMore = () => {
  return (

    <>
      <MediumHeadline>FOR MORE</MediumHeadline><SocMedLinks
        linkedin={linkedin}
        github={github}
        stackoverflow={stackoverflow} />
    </>

  )
}

export default ForMore