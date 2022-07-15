import React from 'react'
import "../style.css"

function ImageCard({link,image}) {
  return (
    <div className='card imgcard'>
        {link && <a href={link.href}  className='black card-text' target="_blank" rel="noopener noreferrer">
        {image && <img className='card-img-top imgimg' src={image.src} alt={image.alt} />}
          
           </a>}
        {link && <a href={link.href}  className='black card-text' target="_blank" rel="noopener noreferrer">{link.title} </a>}
    </div>
  )
}

export default ImageCard