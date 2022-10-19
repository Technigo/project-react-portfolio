import React from 'react';

const Fetch = ({ url, coverName, text, photo }) => {
  return (
    <div>
      <img className="albumImage" src={photo} alt="cover" />
      <a href={url}>länk</a>
      <p>{coverName}</p>
      <p>{text}</p>
    </div>
  );
};

export default Fetch;