import React, { useState } from 'react'
import "./style.css"
function Navbar({setSearchDataNav,setNumData,setIsLoading}) {
  const[isDisabled,setIsDisabled]=useState(true)
  const[isDisabledImage,setIsDisabledImage]=useState(false)
  const[isDisabledNews,setIsDisabledNews]=useState(false)
  const[isDisabledVideo,setIsDisabledVideo]=useState(false)

    function searchClick(){
        setSearchDataNav("search");
        setNumData("&num=100")
        setIsLoading(true)

        setIsDisabled(true)
        setIsDisabledImage(false)
        setIsDisabledNews(false)
        setIsDisabledVideo(false)

    }
    
    function imageClick(){
        setSearchDataNav("image");
        setNumData("")
        setIsLoading(true)

        setIsDisabled(false)
        setIsDisabledImage(true)
        setIsDisabledNews(false)
        setIsDisabledVideo(false)

    }
    function newsClick(){
        setSearchDataNav("news");
        setNumData("")
        setIsLoading(true)

        setIsDisabled(false)
        setIsDisabledImage(false)
        setIsDisabledNews(true)
        setIsDisabledVideo(false)


    }
    function videoClick(){
        setSearchDataNav("video");
        setNumData("");
        setIsLoading(true)

        setIsDisabled(false)
        setIsDisabledImage(false)
        setIsDisabledNews(false)
        setIsDisabledVideo(true)

    }
  return (
    <div>
        <nav className="NarMargin">
  <div className="container-fluid">
    <button className="btn btn-outline-success border2 NarMargin1" onClick={searchClick} disabled={isDisabled}  >Search</button>
    <button className="btn btn-outline-success border2 NarMargin" onClick={imageClick} disabled={isDisabledImage} >Image</button>
    <button className="btn btn-outline-success border2 NarMargin" onClick={newsClick} disabled={isDisabledNews} >News</button>
    <button className="btn btn-outline-success border2 NarMargin" onClick={videoClick} disabled={isDisabledVideo} >Video</button>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar