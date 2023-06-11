import React from 'react'
import demo3 from './images/demo3.jpeg';
import demo4 from './images/demo4.jpeg';
import demo5 from './images/demo5.jpeg';
import demo6 from './images/demo6.jpeg';
import demo2 from './images/demo6.jpeg';
import demo1 from './images/demo6.jpeg';


export default function Gallery() {
  const scrollleft = ()=>{
    var left = document.querySelector(".scroll");
    console.log(left);
    left.scrollBy(400, 0)
}
const scrollright =() =>{
    var right = document.querySelector(".scroll");
    right.scrollBy(-400, 0)
}

  return (
    <div className='divbody'>
      <div className="head">
        <h1>GALLERY</h1>
      </div>

    <div className="conatiner-gallery" id="conatiner-gallery">
        <div>
            <button className="icon" onClick={scrollright}><i className="fas fa-angle-double-left fa-dice-d20"></i></button>
        </div>
        <div className="gallery">
            <div className="scroll" id="scroll">
                <div className="photo">
                    <img className="imgs" src={demo3} alt='Loading...'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo4} alt='Loading...'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo5} alt='Loading...'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo6} alt='Loading...'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo2} alt='Loading...'/>
                </div>
                <div className="photo">
                    <img className="imgs" src={demo1} alt='Loading...'/>
                </div>
            </div>
        </div>
        <div>
            <button className="icon" onClick={scrollleft}><i className="fas fa-angle-double-right"></i></button>
        </div>
    </div>
    </div>
  )
}

