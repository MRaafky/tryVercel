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
        "
        >
            Upcoming Event
        </h2>
        <img src={GaleryofLife}
        class="
        w-[230px]
        rounded-[20px]
        mt-[50px]
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
        "
        >
            <img src={logo2}
            class="
            w-[50px] h-[50px]
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
                "
                >
                    Galery of Life: Ekspresi Dari Melukis
                </h3>
                <div class="
                text-[white]
                flex flex-col
                gap-[2px]
                mt-[15px]
                ">
                    <h4 class="
                    HelveticaBold
                    text-[16px]
                    ">Date</h4>
                    <p class="
                    Helvetica
                    text-[14px]
                    ">JAN 10 2025</p>
                    <h4 class="
                    HelveticaBold
                    text-[16px]">Location</h4>
                    <p class="
                    Helvetica
                    text-[14px]">Taman Kampus 1 UTY</p>
                </div>
                <div class="
                flex flex-row
                gap-[10px]
                mt-[15px]
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
                    ">
                        Buy Now
                    </button>
                </div>
                <p class="
                HelveticaBold
                text-[15px]
                mt-[15px]
                ">
                    "Ekspresikan Kreativitasmu di Gelary of Life"
                </p>
            </div>
        </section>
    </div>
  )
}

export default Halaman4