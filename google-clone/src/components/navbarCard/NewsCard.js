import React from 'react'
import "../style.css"
function NewsCard({title,link}) {
  return (
    <div className='searchMap'>
      <a href={link}  className='blue1' target="_blank" rel="noopener noreferrer">{link}</a>
      <p>{title}</p>
    </div>
  )
}

export default NewsCard