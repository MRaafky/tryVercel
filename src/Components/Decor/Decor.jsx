import React from 'react'
import like from "../../assets/like.png"
import love from "../../assets/love.png"
import WaveAnimation from "../../Components/WaveDot"
import "./Decor.css"

function Decor() {
  return (
    <div class="absolute 
    w-full h-[300%]
    overflow-hidden 
    z-[1] 
    left-0 top-0">
        <img  class="
        like
        relative 
        w-[60px] 
        left-[50px] top-[120px]
        
        lg:w-[80px]
        lg:left-[180px] lg:top-[200px]
        " src={like}></img>
        <img class="
        love
        absolute 
        w-[70px] 
        left-[280px] top-[400px]

        lg:w-[90px]
        lg:left-[1250px]
        " src={love}></img>
        <div class="spray1Decor 
        absolute 
        w-[300px] h-[300px] 
        top-[-200px] 
        blur-[90px] 
        left-[290px]
        rounded-[50px] 
        
        lg:left-[1350px] lg:top-[-180px]
        lg:blur-[100px]
        "></div>
        <WaveAnimation class="wavecontainer"></WaveAnimation>
        <div class="spray2Decor 
        absolute  
        w-[200px] h-[300px]
        blur-[70px] 
        z-[0] 
        rounded-[100px] 
        top-[600px] left-[-100px]
        
        lg:w-[400px] lg:h-[500px]
        lg:top-[650px] lg:left-[-300px]
        lg:blur-[100px]
        "></div>
        <div class="spray2-2Decor 
        absolute  
        w-[200px] h-[300px]
        blur-[70px] 
        z-[0] 
        rounded-[100px] 
        top-[600px] left-[-130px]
        
        lg:w-[400px] lg:h-[400px]
        lg:top-[700px] lg:left-[-280px]
        lg:blur-[120px]"></div>
        <div
        class=" spray3Decor
        absolute
        w-[250px] h-[250px]
        blur-[70px] 
        z-[1] 
        rounded-[200px] 
        top-[1000px] right-[-50px]

        lg:w-[450px] lg:h-[450px] lg:rounded-[50%]]
        lg:right-[50px] lg:top-[900px] lg:blur-[200px]
        "
        ></div>
    </div>
  )
}

export default Decor