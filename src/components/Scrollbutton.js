/* eslint-disable linebreak-style */
import React from 'react'
import { ScrollBtn } from 'Globalstyles';

const ScrollButton = () => {
  const theScrollBtn = document.getElementById('scrollBtn')
  // if the user scrolls down 60px from top the button will be visible
  const scrollFunction = () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      theScrollBtn.style.display = 'block';
    } else {
      theScrollBtn.style.display = 'none';
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
    <ScrollBtn onClick={topFunction} id="theScrollBtn" title="Go to top">
      Top &#8673;
    </ScrollBtn>
  )
};

export default ScrollButton
