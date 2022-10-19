
/* eslint-disable */


import React from 'react';

export const Image = (props) => {

return (
    <a
        href={props.Link}
        aria-label="Go to album"
        target="_blank"
        rel="noopener noreferrer">
        
        <img 
        className="Image" 
        src={props.Image} 
        alt="Cover of album"/>
    </a>
    )
}

