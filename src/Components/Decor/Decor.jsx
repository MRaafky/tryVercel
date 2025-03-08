import React from 'react'
import like from "../../assets/like.png"
import love from "../../assets/love.png"
import WaveAnimation from "../../Components/WaveDot"
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
        w-[70px] 
        left-[280px] top-[400px]
        " src={love}></img>
        <div class="spray1Decor 
        absolute 
        w-[300px] h-[300px] 
        top-[-200px] 
        blur-[90px] 
        left-[290px]
        rounded-[50px] "></div>
        <WaveAnimation></WaveAnimation>
        <div class="spray2Decor 
        absolute  
        w-[200px] h-[300px]
        blur-[70px] 
        z-[0] 
        rounded-[100px] 
        top-[600px] left-[-100px]"></div>
        <div class="spray2-2Decor 
        absolute  
        w-[200px] h-[300px]
        blur-[70px] 
        z-[0] 
        rounded-[100px] 
        top-[600px] left-[-130px]"></div>
        <div
        class=" spray3Decor
        absolute
        w-[250px] h-[250px]
        blur-[70px] 
        z-[1] 
        rounded-[200px] 
        top-[1000px] right-[-50px]
        "
        ></div>
    </div>
  )
}

export default Decor