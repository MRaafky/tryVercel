import React from "react";
import CreativeMedia from "../../assets/CDhal3.png";
import Movement from "../../assets/Mhal3.png";
import SharingSession from "../../assets/SShal3.png";
import SocialEducation from "../../assets/SEhal3.png";
import ShortCourse from "../../assets/SChal3.png";
import "./Halaman2.css";

function Halaman2() {
  return (
    <div
      id="program"
      className="
      w-full 
      bg-black
      z-1
      flex
      flex-col
      justify-center
      items-center
      pt-[128px]

      lg:pt-[50px]
      "
    >
      <h2
        class="
        HelveticaBold
        text-[25px] 
        text-white 
        mt-0 
        pb-[64px]

        lg:text-[40px]
        "
      >
        Our Program
      </h2>
      <section
        className="
        Helvetica
        flex
        flex-row 
        items-center 
        justify-center 
        flex-wrap 
        gap-[20px] 
        w-full
        
        lg:justify-around
        lg:p-[50px] lg:gap-[50px]
        lg:mt-[-50px]
        lg:w-[1100px] lg:h-[500px]
        "
      >
        {programs.map((program, index) => (
          <div
            key={index}
            className="
            text-[16px]
            flex 
            justify-center 
            items-center 
            w-[112px] 
            h-[125px] 
            gap-[10px] 
            m-[15px] 
            flex-col-reverse 
            md:flex-row
            
            lg:w-[25%]
            "
          >
            <img
              className="
              w-[60px]

              lg:w-[100px]
              "
              src={program.image}
              alt={program.title}
            />
            <h3
              className="
              HelveticaBold
              w-[60px] 
              text-[12px] 
              text-white
              text-center

              lg:text-[18px]
              "
            >
              {program.title}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
}

const programs = [
  {
    title: "Creative Media",
    image: CreativeMedia,
  },
  {
    title: "Movement",
    image: Movement,
  },
  {
    title: "Sharing Session",
    image: SharingSession,
  },
  {
    title: "Social Education",
    image: SocialEducation,
  },
  {
    title: "Short Course",
    image: ShortCourse,
  },
];

export default Halaman2;
