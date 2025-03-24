import React from "react";
import "./Landing.css"
import "../font.css";

function Landing() {
  return (
    <div
      class=" bg-[none] 
      text-[white] 
      w-full h-auto 
      flex flex-col 
      items-center 
      z-[2] 
      relative"
    >
      <h1
        class="HelveticaBold 
        text-[40px] 
        mt-[250px]
        
        md:text-[60px]
        md:mt-[230px]

        lg:text-[100px]
        "
      >
        Unteyo Journey
      </h1>
      <p class="Helvetica 
      text-[18px] 
      mt-[4px]
      
      md:text-[24px]
      md:mt-[2px]
      
      lg:text-[26px]
      lg:mt-[0px]
      ">
        Greeting Quality Students
      </p>
      <button class="
      btnLanding
      Helvetica
      w-[250px] h-[40px]
      text-[12px]
      mt-[200px]
      bg-[black]
      text-[white] 
      transition-[0.5s] 
      hover:text-[black] 
      hover:bg-[white] 
      hover:transition-[0.5s]
      hover: border-[white]
      // active atau focus untuk efek hover mobile
      active:text-[black] 
      active:bg-[white] 
      active:transition-[0.5s]
      active: border-[white] 
      border-[1px] border-solid border-[white] border rounded-[10px]
      
      md:w-[350px] md:h-[50px] md:text-[15px]
      md:mt-[180px]

      lg:w-[500px] lg:h-[60px]
      lg:text-[17px] lg:rounded-[15px]
      ">
        Explore Our Journey
      </button>
      <p class="Helvetica 
      text-[15px] 
      mt-[9px]
      
      lg:text-[15px]
      lg:mt-[30px]
      ">#BeWise</p>
    </div>
  );
}

export default Landing;
