import React from 'react'
import "./style.css"

function PaginationWord({setSliceValueOne,setSliceValueTwo}) {
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
        <nav aria-label="navigation example">
  <ul className="pagination">
    
    <li className="page-item1 page1"><span className="blueS" onClick={clickOne}>S</span></li>
    <li className="page-item1 pages"><span className="redE" onClick={clickTwo}>e</span></li>
    <li className="page-item1 pages"><span className="yellowA" onClick={clickThree}>a</span></li>
    <li className="page-item1 pages"><span className="yellowA" onClick={clickFour}>a</span></li>
    <li className="page-item1 pages"><span className="yellowA" onClick={clickFive}>a</span></li>
    <li className="page-item1 pages"><span className="yellowA" onClick={clickSix}>a</span></li>
    <li className="page-item1 pages"><span className="yellowA" onClick={clickSeven}>a</span></li>
    <li className="page-item1 pages marginPage"><span className="blueS" onClick={clickEight}>r</span></li>
    <li className="page-item1 pages"><span className="greenC" onClick={clickNine}>c</span></li>
    <li className="page-item1 pages marginPage1"><span className="redE" onClick={clickTen} >h</span></li>
    
  </ul>
</nav>
    </div>
  )
}

export default PaginationWord