import React from 'react'
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share'

import sprite from '../../../icons/sprite.svg'

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
          <svg><use href={`${sprite}#at`} /></svg>
        </EmailShareButton>
        <TwitterShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <svg><use href={`${sprite}#twitter`} /></svg>
        </TwitterShareButton>
        <FacebookShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          quote={title}
        >
          <svg><use href={`${sprite}#facebook`} /></svg>
        </FacebookShareButton>
        <TelegramShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <svg><use href={`${sprite}#telegram`} /></svg>
        </TelegramShareButton>
        <ViberShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
        >
          <svg><use href={`${sprite}#viber`} /></svg>
        </ViberShareButton>
        <WhatsappShareButton
          className="single-post-intro__share-btn"
          url={pageLnk}
          title={title}
          separator=":: "
        >
          <svg><use href={`${sprite}#whats-app`} /></svg>
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default Share