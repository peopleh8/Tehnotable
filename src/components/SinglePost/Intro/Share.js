import React from 'react'

import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share'

import share1 from '../../../images/share-1.svg'
import share2 from '../../../images/share-2.svg'
import share3 from '../../../images/share-3.svg'
import share4 from '../../../images/share-4.svg'
import share5 from '../../../images/share-5.svg'
import share6 from '../../../images/share-6.svg'

const Share = ({ title, article, pageLnk }) => {
  return (
    <div className="single-post-intro__share">
      <p className="single-post-intro__share-text">Share:</p>
      <div className="single-post-intro__share-inner">
        <EmailShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          subject={title}
          body={article}
        >
          <img src={share1} alt=""/>
        </EmailShareButton>
        <TwitterShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <img src={share2} alt=""/>
        </TwitterShareButton>
        <FacebookShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          quote={title}
        >
          <img src={share3} alt=""/>
        </FacebookShareButton>
        <TelegramShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <img src={share4} alt=""/>
        </TelegramShareButton>
        <ViberShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <img src={share5} alt=""/>
        </ViberShareButton>
        <WhatsappShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
          separator=":: "
        >
          <img src={share6} alt=""/>
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default Share