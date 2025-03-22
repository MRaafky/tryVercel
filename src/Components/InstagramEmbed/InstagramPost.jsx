import React from 'react'
import InstagramEmbed from './InstagramEmbed';

function InstagramPost() {
    const postUrl = "https://www.instagram.com/p/DHaTQQ4yZSs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  return (
    <div><h1>Embed Instagram Post</h1>
      <InstagramEmbed url={postUrl} /></div>
  )
}

export default InstagramPost