import React, { useState } from 'react'

import './SeoBlock.scss'

const SeoBlock = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <section className="seo-block">
      <div className="container">
        <div className="seo-block__title title title--small">SEO TEXT</div>
        <article className={`seo-block__article ${isOpen ? 'open' : ''}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          </ul>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          </ol>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <h4>Hello</h4>
          <h5>Hello</h5>
          <h6>Hello</h6>
        </article>
        <div className="seo-block__btn-wrapper">
          <button className="seo-block__btn" onClick={() => setIsOpen(prev => !prev)}>
            <span className="seo-block__btn-inner">
              { isOpen ? 'read less' : 'read more' }
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SeoBlock