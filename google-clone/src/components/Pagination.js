import React from 'react'
import "./style.css"

function Pagination({setSliceValueOne,setSliceValueTwo}) {
  
    function clickOne(){
        setSliceValueOne(0);
        setSliceValueTwo(10)
        window.scrollTo(300, 0);

    }
    function clickTwo(){
        setSliceValueOne(10);
        setSliceValueTwo(20);
        window.scrollTo(300, 0);
    }
    function clickThree(){
        setSliceValueOne(20);
        setSliceValueTwo(30);
        window.scrollTo(300, 0);
    }
    function clickFour(){
        setSliceValueOne(30);
        setSliceValueTwo(40);
        window.scrollTo(300, 0);
    }
    function clickFive(){
        setSliceValueOne(40);
        setSliceValueTwo(50);
        window.scrollTo(300, 0);
    }
    function clickSix(){
        setSliceValueOne(50);
        setSliceValueTwo(60);
        window.scrollTo(300, 0);
    }
    function clickSeven(){
        setSliceValueOne(60);
        setSliceValueTwo(70);
        window.scrollTo(300, 0);
    }
    function clickEight(){
        setSliceValueOne(70);
        setSliceValueTwo(80);
        window.scrollTo(300, 0);
    }
    function clickNine(){
        setSliceValueOne(80);
        setSliceValueTwo(90);
        window.scrollTo(300, 0);
    }
    function clickTen(){
        setSliceValueOne(90);
        setSliceValueTwo(100);
        window.scrollTo(300, 0);
    }
    return (
    <div>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    
    <li className="page-item page"><button className="btn btn-outline-success" onClick={clickOne}>1</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickTwo}>2</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickThree}>3</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickFour}>4</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickFive}>5</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickSix}>6</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickSeven}>7</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickEight}>8</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickNine}>9</button></li>
    <li className="page-item pages"><button className="btn btn-outline-success" onClick={clickTen} >10</button></li>
    
  </ul>
</nav>
    </div>
  )
}

export default Pagination