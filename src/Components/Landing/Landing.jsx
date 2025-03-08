import React from "react";
import "./Landing.css"
import "./font.css";

function Landing() {
  return (
    <div
      class=" bg-[black] 
      text-[white] 
      w-full h-auto 
      flex flex-col 
      items-center 
      z-[1]  "
    >
      <h1
        class="HelveticaBold 
        text-[40px] 
        mt-[320px]"
      >
        Unteyo Journey
      </h1>
      <p class="Helvetica 
      text-[18px] 
      mt-[4px]">
        Greeting Quality Students
      </p>
      <button class="Helvetica
      w-[250px] h-[40px]
      mt-[290px] 
      transition-[0.5s] 
      hover:text-[black] 
      hover:bg-[white] 
      hover:transition-[0.5s] 
      border-[1px] border-solid border-[white] border rounded-[10px]  
      ">
        Explore Our Journey
      </button>
      <p class="Helvetica 
      text-[15px] 
      mt-[9px]">#BeWise</p>
    </div>
  );
}

export default Landing;
