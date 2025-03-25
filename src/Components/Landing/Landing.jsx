import React from "react";
import "./Landing.css";
import "../font.css";

function Landing() {
  return (
    <div
      className="
        bg-none
        text-white
        w-full 
        min-h-screen 
        md:h-screen 
        md:max-h-screen 
        md:overflow-hidden 
        flex flex-col
        items-center
        justify-center
        z-[2]
        relative
        md:px-4
      "
    >
      <div 
        className="
          w-full 
          h-full 
          md:absolute 
          md:top-0 
          md:left-0 
          md:gap-[20px]
          flex flex-col
          items-center
          justify-center
        "
      >
        <h1
          className="
            HelveticaBold
            text-[40px]
            mt-[250px]
            text-center
            md:mt-0
            md:mb-[100px]
            md:text-[60px]
            md:max-w-[800px]
            lg:text-[100px]
          "
        >
          Unteyo Journey
        </h1>
        <p
          className="
            Helvetica
            text-[18px]
            mt-[4px]
            text-center
            md:text-[24px]
            md:mt-[100px]
            lg:text-[26px]
            lg:mt-[0px]
          "
        >
          Greeting Quality Students
        </p>
        <button
          className="
            btnLanding
            Helvetica
            w-[250px] h-[40px]
            text-[12px]
            mt-[200px]
            md:mt-[50px]
            bg-black
            text-white
            transition-[0.5s]
            hover:text-black
            hover:bg-white
            hover:transition-[0.5s]
            hover:border-white
            active:text-black
            active:bg-white
            active:transition-[0.5s]
            active:border-white
            border-[1px] border-solid border-white
            rounded-[10px]
            md:w-[350px]
            md:h-[50px]
            md:text-[15px]
            lg:w-[500px]
            lg:h-[60px]
            lg:text-[17px]
            lg:rounded-[15px]
          "
        >
          Explore Our Journey
        </button>
        <p
          className="
            Helvetica
            text-[15px]
            mt-[9px]
            text-center
            lg:text-[15px]
            lg:mt-[30px]
          "
        >
          #BeWise
        </p>
      </div>
    </div>
  );
}

export default Landing;