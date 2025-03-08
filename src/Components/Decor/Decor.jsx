import React from 'react'
import like from "../../assets/like.png"
import love from "../../assets/love.png"
import "./Decor.css"

function Decor() {
  return (
    <div class="absolute 
    w-full h-[200%] 
    overflow-hidden 
    z-[2] 
    left-0 top-0">
        <img  class="relative 
        w-[60px] 
        left-[50px] top-[120px]" src={like}></img>
        <img class="absolute 
        w-[60px] 
        left-[250px] top-[400px]
        " src={love}></img>
        <div class="spray1Decor 
        absolute 
        w-[300px] h-[300px] 
        top-[-290px] 
        blur-[200px] 
        left-[290px]
        rounded-[50px] "></div>
        <div class="spray2Decor 
        absolute 
        hidden 
        w-[200px] h-[300px] 
        z-[2] 
        rounded-[100px] 
        top-[300px]"></div>
    </div>
  )
}

export default Decor