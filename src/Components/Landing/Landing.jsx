import React from "react";
// import "./Landing.css"
import "./font.css";

function Landing() {
  return (
    <div
      className="containerLanding"
      class="w-full h-auto flex flex-col items-center z-[1]  "
    >
      <h1
        className="judulLanding"
        class="text-[35px] mt-[230px] font-family: HelveticaBold"
      >
        Unteyo Journey
      </h1>
      <p class="text-[15px] mt-[5px] font-family: Helvetica">
        Greeting Quality Students
      </p>
      <button class="transition-[0.5s] hover:text-[black] hover:bg-[white] hover:transition-[0.5s] font-family: Helvetica">
        Explore Our Journey
      </button>
      <p class="text-xs mt-2 font-family: Helvetica">#BeWise</p>
    </div>
  );
}

export default Landing;
