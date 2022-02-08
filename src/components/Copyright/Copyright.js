import React from 'react'

import './Copyright.scss'

const Copyright = () => {
  return (
    <div className="copyright">
      <p className="copyright__text">
        &copy; {new Date().getFullYear()} tehnotable. All rights reserved.
      </p>
    </div>
  )
}

export default Copyright