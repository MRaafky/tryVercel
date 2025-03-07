import React from 'react'
import Laptop from "../../assets/laptopHal1.png"
import "./Halaman1.css"

function Halaman1() {
  return (
    <div className='containerHalaman1'>
        <div className='containerIsiHal1'>
            <h2 className='judulHal1'>What is Unteyo Journey?</h2>
            <p>Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.</p>
            <p>Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.</p>
        </div>
        <img src={Laptop} className='laptopHal1' 
        class="hidden"></img>
         <div class="bg-gray-100 flex items-center justify-center min-h-screen">
         <div class="bg-blue-500 
                w-64 h-64 
                md:w-96 md:h-96 
                rounded-lg 
                shadow-lg 
                flex items-center justify-center text-white text-lg">
        Kotak Responsif
    </div>
         </div>
    </div>
  )
}

export default Halaman1