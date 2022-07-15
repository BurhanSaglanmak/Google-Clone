import React from 'react'
import "../style.css"

function SearchCard({description,link,title}) {
    return (
        <div className='searchMap'>
            <p className='link'>{link}</p>
            <a href={link}  className='blue1' target="_blank" rel="noopener noreferrer" >{title}</a>
            <p>{description}</p>
        </div>
      )
}

export default SearchCard