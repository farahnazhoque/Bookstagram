// Version: 1.0 command: rfce

import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';  // Updated Material-UI v5
function Post({username, caption, imageURL}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar
            className='post_avatar'
            alt={username}
            />
            <h3>{username}</h3>
        </div>
      {/* Header -> avatar + username */}
      <img className='post_image' alt="" src={imageURL}/>
      {/* Image */}
      <h4 className='post_text'><strong>{username}</strong> {caption}</h4>
      {/* Username + caption */}

    </div>
  )
}

export default Post
