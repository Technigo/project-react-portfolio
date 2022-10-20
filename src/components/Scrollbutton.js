/* eslint-disable linebreak-style */
import React from 'react'
import { ScrollBtn } from 'Globalstyles';

const ScrollButton = () => {
  const scrollFunction = () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.getElementById('scrollBtn').style.display = 'block';
    } else {
      document.getElementById('scrollBtn').style.display = 'none';
    }
  };

  window.onscroll = () => {
    scrollFunction();
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <ScrollBtn onClick={topFunction} id="scrollBtn" title="Go to top">
      Top &#8673;
    </ScrollBtn>
  )
};

export default ScrollButton
