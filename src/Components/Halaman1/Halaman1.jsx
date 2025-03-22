import React from 'react'
import Laptop from "../../assets/laptopHal1.png"
// import "./Halaman1.css"

function Halaman1() {
  return (
    <div class="bg-[black]
    w-full h-full
    flex justify-center items-center flex-col
    relative

    lg:flex-row
    lg:p-[200px] lg:pt-[100px]
    ">
        <div class="text-[white]
        mt-[100px]
        bg-[black]
        flex flex-col item-start
        p-[40px]
        gap-[10px]

        lg:pr-[100px]
        ">
            <h2 class="
            HelveticaBold
            text-[25px]

            lg:text-[45px]
            ">What is Unteyo Journey?</h2>
            <p class="
            Helvetica
            text-[15px]

            lg:text-[20px]
            ">Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.</p>
            <p class="
            Helvetica
            text-[15px] z-[2]

            lg:text-[20px]
            ">Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.</p>
        </div>
        <img src={Laptop} 
        class="
        w-[200px]
        relative
        left-[40px]
        z-[2]

        lg:w-[300px]
        lg:top-[100px] lg:left-[0px]
        "></img>
    </div>
  )
}

export default Halaman1