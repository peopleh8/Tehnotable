import React from 'react'

import singlePost1 from '../../../images/single-post1.jpg'

const Preview = ({ preview }) => {
  return (
    <div className="single-post-intro__preview">
      <img src={preview} alt="" width={1500} height={840}/>
    </div>
  )
}

export default Preview