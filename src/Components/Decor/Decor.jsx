import React from 'react'
import like from "../../assets/like.png"
import love from "../../assets/love.png"
import "./Decor.css"

function Decor() {
  return (
    <div className='containerDecor'>
        <img className='likeDecor' src={like}></img>
        <img className='loveDecor' src={love}></img>
        <div className='spray1Decor'></div>
        <div className='spray2Decor'></div>
    </div>
  )
}

export default Decor