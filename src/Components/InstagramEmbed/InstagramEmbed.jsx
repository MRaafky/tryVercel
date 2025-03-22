import React from 'react';

const InstagramEmbed = ({ url }) => {
  return (
    <div>
      <iframe
        src={`https://www.instagram.com/p/${url}/embed`}
        width="400"
        height="500"
        frameBorder="0"
        scrolltransparency="true"
        allow="encrypted-media"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

export default InstagramEmbed;
