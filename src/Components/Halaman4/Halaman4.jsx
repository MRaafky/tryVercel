import React from 'react'
import logo2 from "../../assets/logo2.png"
import StrategiMahasiswa from "../../assets/Events/strategimahasiswa.png"
import TaketheTrash from "../../assets/Events/takethetrash.png"
import Pilmapres from "../../assets/Events/pilmapres.png"
import PersonalBranding from "../../assets/Events/personalbranding.png"
import GaleryofLife from "../../assets/Events/galeryoflife.png"

function Halaman4() {
  return (
    <div
    class="
    flex flex-col
    justify-center items-center
    "
    >
        <h2
        class="
        HelveticaBold
        text-[white]
        text-[25px]
        mt-[100px]

        lg:text-[40px]
        "
        >
            Upcoming Event
        </h2>
        <div class="
        w-full
        flex flex-col
        items-center justify-center

        lg:flex-row-reverse
        lg:gap-[100px]
        ">
        <img src={GaleryofLife}
        class="
        w-[230px]
        rounded-[20px]
        mt-[50px]

        lg:w-[320px]
        "
        ></img>
        <section
        class="
        w-[320px] h-auto
        border-[3px] border-white
        rounded-[10px]
        mt-[40px]
        flex flex-row
        p-[10px]
        gap-[20px]

        lg:w-[480px] 
        lg:p-[20px]
        lg:gap-[30px]
        "
        >
            <img src={logo2}
            class="
            w-[50px] h-[50px]

            lg:w-[70px] lg:h-[70px]
            "
            ></img>
            <div
            class="
            text-[white]
            "
            >
                <h3
                class="
                HelveticaBold
                text-[18px]

                lg:text-[24px]
                "
                >
                    Galery of Life: Ekspresi Dari Melukis
                </h3>
                <div class="
                text-[white]
                flex flex-col
                gap-[2px]
                mt-[15px]

                lg:mt-[25px]
                lg:gap-[5px]
                ">
                    <h4 class="
                    HelveticaBold
                    text-[16px]

                    lg:text-[20px]
                    ">Date</h4>
                    <p class="
                    Helvetica
                    text-[14px]

                    lg:text-[16px]
                    ">JAN 10 2025</p>
                    <h4 class="
                    HelveticaBold
                    text-[16px]
                    
                    lg:text-[20px]
                    ">Location</h4>
                    <p class="
                    Helvetica
                    text-[14px]
                    
                    lg:text-[16px]
                    ">Taman Kampus 1 UTY</p>
                </div>
                <div class="
                flex flex-row
                gap-[10px]
                mt-[15px]

                lg:mt-[25px]
                lg:gap-[25px]
                ">
                    <button class="
                    w-[100px]
                    border-[2px] border-white
                    rounded-[5px]
                    text-[10px]
                    hover:bg-[white]
                    hover:text-[black]
                    transition-all
                    duration-[0.3s]

                    lg:w-[130px] lg:h-[25px]
                    lg:rounded-[8px]
                    ">
                        More Info
                    </button>
                    <button class="
                    w-[100px]
                    border-[2px] border-white
                    rounded-[5px]
                    text-[10px]
                    hover:bg-[white]
                    hover:text-[black]
                    transition-all
                    duration-[0.3s]

                     lg:w-[130px] lg:h-[25px]
                    lg:rounded-[8px]
                    ">
                        Buy Now
                    </button>
                </div>
                <p class="
                HelveticaBold
                text-[15px]
                mt-[15px]

                lg:text-[20px]
                lg:mt-[25px]
                ">
                    "Ekspresikan Kreativitasmu di Gelary of Life"
                </p>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Halaman4