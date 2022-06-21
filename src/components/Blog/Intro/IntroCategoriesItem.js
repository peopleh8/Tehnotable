import React from 'react'

const IntroCategoriesItem = ({ id, isActive, title, count, toggleIsActive }) => {
  return (
    <button
      className={`intro-blog__categories-item ${isActive ? 'active' : ''}`}
      onClick={() => toggleIsActive(id)}
    >
      <span className="intro-blog__categories-item-inner">
        <span className="intro-blog__categories-name">{title}</span>
        <span className="intro-blog__categories-count">(<span>{count}</span>)</span>
      </span>
    </button>
  )
}

export default IntroCategoriesItem