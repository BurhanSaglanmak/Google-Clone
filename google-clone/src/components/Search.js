import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import ImageCard from './navbarCard/ImageCard';
import NewsCard from './navbarCard/NewsCard';
import SearchCard from './navbarCard/SearchCard';
import VideoCard from './navbarCard/VideoCard';
import Pagination from './Pagination';
import PaginationWord from './PaginationWord';
import "./style.css"

function Search({ value, setValue }) {
    const [inputChange, setInputChange] = useState("")
    const [searchData, setSearchData] = useState([])
    const [searchImageData, setSearchImageData] = useState([])
    const [searchNewsData, setSearchNewsData] = useState([])
    const[isLoading, setIsLoading]=useState(true)
    const[sliceValueOne, setSliceValueOne]=useState(0);
    const[sliceValueTwo, setSliceValueTwo]=useState(10);
    const [searchDataNav,setSearchDataNav]=useState("search")
    const [numData,setNumData]=useState("&num=100")
    const navigate = useNavigate();
    
    function change(e) {
        setInputChange(e.target.value)
    }
    
    function mainClick() {
        setValue("")
    }
    function searchClick() {
        if (inputChange!=="") {
            setValue(inputChange)
            setIsLoading(true)
        }
       
    }
    
    useEffect(() => {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: `https://google-search3.p.rapidapi.com/api/v1/${searchDataNav}/q=${value}${numData}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                //  'X-RapidAPI-Key': 'Your Api Key!!',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
          // console.log(response.data.results);
          if (searchDataNav==="search" && searchDataNav!=="image" &&searchDataNav!=="news" &&searchDataNav!=="video" ) {
            setSearchData(response.data.results);
            setIsLoading(false)
            
          }
          if (searchDataNav==="image" && searchDataNav!=="search" &&searchDataNav!=="news" &&searchDataNav!=="video") {
            setSearchImageData(response.data.image_results);
           //console.log(response.data.image_results);
           setIsLoading(false)
            
          }
          if (searchDataNav==="news"&& searchDataNav!=="image" &&searchDataNav!=="search" &&searchDataNav!=="video") {
            setSearchNewsData(response.data.entries);
        //    console.log(response.data.entries);
        setIsLoading(false)
          }
          if (searchDataNav==="video"&& searchDataNav!=="image" &&searchDataNav!=="news" &&searchDataNav!=="search") {
            setSearchData(response.data.results);
          // console.log(response.data.results);
          setIsLoading(false)
          }
            setIsLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, [value,setSearchData,setIsLoading,numData,searchDataNav])
    const toReplace= `/search/${inputChange.toLocaleLowerCase().replaceAll(" ", "+").replaceAll("ç","c").replaceAll("Ç","c").replaceAll("ğ","g").replaceAll("Ğ","g").replaceAll("ş","s").replaceAll("Ğ","g").replaceAll("ş","s").replaceAll("Ş","s").replaceAll("ü","u").replaceAll("Ü","u").replaceAll("ı","i").replaceAll("I","i").replaceAll("ö","o").replaceAll("Ö","o")}`;

    function click(e) {
        e.preventDefault();        
        
        if (inputChange!=="") {
            setValue(inputChange)
        setIsLoading(true)
        navigate(toReplace);
        }

    }
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <div className="d-flex" role="search">
                        <form className="d-flex" role="search" onSubmit={click}>
                            <Link to="/" onClick={mainClick} className="marginBottom" ><span className='blue'>S</span><span className='red'>e</span><span className='yellow'>a</span><span className='blue'>r</span><span className='green'>c</span><span className='red'>h</span> </Link>
                            <input value={inputChange} onChange={change} className="form-control me-2 margin marginBottom" type="search" placeholder="Search" aria-label="Search" />
                            <Link className="btn btn-outline-success border2 marginBottom" onClick={searchClick} type="submit" to={inputChange!==""&&toReplace}>Search</Link>
                        </form>
                    </div>
                </div>
            </nav>
            <Navbar setSearchDataNav={setSearchDataNav} setNumData={setNumData} setIsLoading={setIsLoading} />
            <hr></hr>
           

            {isLoading?  searchDataNav==="search" && <div className='spin'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>:<div>
                {searchDataNav!=="image" && searchDataNav!=="video" && searchDataNav!=="news" && searchDataNav==="search" ? searchData?.slice(sliceValueOne,sliceValueTwo).map((item, index) => (
                    <SearchCard
                        key={index}
                        index={index}
                        description={item.description}
                        link={item.link}
                        title={item.title}
                    />
                )) : <div></div>}
                {searchDataNav!=="image" &&  searchDataNav!=="video" && searchDataNav!=="news" && <PaginationWord setSliceValueOne={setSliceValueOne} setSliceValueTwo={setSliceValueTwo}/>}
                {searchDataNav!=="image" && searchDataNav!=="video" && searchDataNav!=="news" && <Pagination setSliceValueOne={setSliceValueOne} setSliceValueTwo={setSliceValueTwo} /> }
            </div>}


            {isLoading? searchDataNav==="image" && <div className='spin'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>:<div className='imageCard'>
                {searchDataNav!=="search" && searchDataNav!=="video" && searchDataNav!=="news" && searchDataNav==="image" && searchImageData?.map((item, index) => (
                     <ImageCard
                        key={index}
                        index={index}
                        link={item.link}
                        image={item.image}
                    />
                ))}
               
            </div>}

            {isLoading? searchDataNav==="news" &&  <div className='spin'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>: <div>
                {searchDataNav!=="image" && searchDataNav!=="video" && searchDataNav!=="search" && searchDataNav==="news" && searchNewsData?.map((item, index) => (
                    <NewsCard
                        key={index}
                        index={index}
                        title={item.title}
                        link={item.link}
                    />
                ))}
                 </div>}


                 {isLoading? searchDataNav==="video" && <div className='spin'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>:<div>
                {searchDataNav!=="image" && searchDataNav!=="search" && searchDataNav!=="news" && searchDataNav==="video" && searchData?.map((item, index) => (
                    <VideoCard
                        key={index}
                        index={index}
                        description={item.description}
                        link={item.link}
                        title={item.title}
                    />
                ))}
                 </div>}
        </div>
    )
}

export default Search