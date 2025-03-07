import React from 'react'
import like from "../../assets/like.png"
import love from "../../assets/love.png"
import "./Decor.css"

function Decor() {
  return (
    <div class="containerDecor absolute w-full h-[200%] overflow-hidden z-[2] left-0 top-0">
        <img  class="absolute w-[60px] left-10 top-[120px]" src={like}></img>
        <img class="absolute w-[60px] left-[200px] top-[350px]" src={love}></img>
        <div class="spray1Decor absolute w-[100px] h-[100px] top-[-30px] blur-[45px] rounded-[50px] left-[250px]"></div>
        <div class="spray2Decor absolute hidden w-[200px] h-[300px] z-[2] rounded-[100px] top-[300px]"></div>
    </div>
  )
}

export default Decor