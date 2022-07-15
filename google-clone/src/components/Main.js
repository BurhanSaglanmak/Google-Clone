import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import "./style.css"
import "../App.css"

function Main({ value, setValue }) {
    const navigate = useNavigate();
    function change(e) {
        setValue(e.target.value)
    }
    const toReplace= `/search/${value.toLocaleLowerCase().replaceAll(" ", "+").replaceAll("ç","c").replaceAll("Ç","c").replaceAll("ğ","g").replaceAll("Ğ","g").replaceAll("ş","s").replaceAll("Ğ","g").replaceAll("ş","s").replaceAll("Ş","s").replaceAll("ü","u").replaceAll("Ü","u").replaceAll("ı","i").replaceAll("I","i").replaceAll("ö","o").replaceAll("Ö","o")}`;
    function click(e) {
        e.preventDefault();
        if (value!=="") {
        navigate(toReplace);
            
        }
    }
   
    return (
        <div>
        <div className='button'>
            <nav className="navbar bg-light">
                <div className="container-fluid ">
                    <form className="search " role="search" onSubmit={click} >
                        <h1><span className='blueS'>S</span><span className='redE'>e</span><span className='yellowA'>a</span><span className='blueS'>r</span><span className='greenC'>c</span><span className='redE'>h</span> </h1>
                        <input value={value} onChange={change} className="form-control me-2 border" type="search" placeholder="Search" aria-label="Search" />
                        <Link className="btn btn-outline-success border1 " type="submit" to={value!==""&&toReplace}>Search</Link>
                    </form>
                </div>
            </nav>
        </div>
        <hr className='hr'></hr>
        </div>
    )
}

export default Main