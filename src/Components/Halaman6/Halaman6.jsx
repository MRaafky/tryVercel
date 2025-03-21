import React from 'react'
import anggota from "../../assets/anggota.png"
import anggotabaru from "../../assets/anggotabaru.png"
import Terai from "../../assets/LogoTerai.png"
import Hubungins from "../../assets/LogoHubung'ins.png"
import Perspektif from "../../assets/LogoPerspektif.png"
import "./Halaman6.css"

function Halaman6() {
  return (
    <div class="
    containerHal6
    text-[white]
    flex flex-col
    items-center
    mt-[60px]
    overflow-hidden
    ">
        <h2
        class="
        HelveticaBold
        text-[30px]
        text-[white]
        "
        >Let's Connect</h2>
        <h2
        class="
        HelveticaBold
        text-[25px]
        text-[white]
        "
        >with Us</h2>
        <div
        class="
        imgContainerHal6
        w-full
        mt-[30px]
        overflow-hidden
        "
        >
            <img src={anggotabaru}
            class="
            imgHal6
            w-[700px] max-w-none
            relative
            top-[-10%] left-[-15%]
            overflow-hidden
            "
            ></img>
            <img src={anggotabaru}
            class="
            imgHal6
            w-[600px] max-w-none
            relative
            top-[70px] left-[-7%]
            overflow-hidden
            "
            ></img>
        </div>
        <div class="
        containerBlob
        w-min h-min
        bg-[white]
        top-[400px]
        left-[10px]
        absolute
        flex flex-nowrap
        ">
            <div class="
            blob
            blob1
            w-[100px] h-[100px]
            bg-[#b22e15]
            blur-[20px]
            rounded-[50%]
            opacity-[0.8]
            absolute
            top-[20px]
            "></div>
            <div class="
            blob
            blob2
            w-[100px] h-[100px]
            bg-[#e0c39f]
            blur-[20px]
            rounded-[50%]
            opacity-[0.8]
            absolute
            "></div>
            <div class="
            blob
            blob3
            w-[100px] h-[100px]
            bg-[#d67e45]
            blur-[20px]
            rounded-[50%]
            opacity-[0.8]
            absolute
            top-[-20px]
            "></div>
        </div>
        <div
        class="
        filterImg
        w-[500px]
        h-[100px]
        bg-[black]
        blur-[20px]
        z-1
        absolute
        top-[460px]
        left-[-10%]
        "
        ></div>
       <div class="
       containerFilterImg
       w-screen
       h-fit
       ">
        <section
        class="
        w-screen
        flex flex-row
        gap-[30px]
        items-start
        justify-center
        mt-[10px]
        z-2
        "
        >
            <div class="
            flex flex-col
            items-center
            ">
                <h3 class="
                HelveticaBold
                text-[15px]
                ">Supported By:</h3>
                <div>
                    <img src={Hubungins}
                    class="
                    w-[75px]
                    "
                    ></img>
                </div>
            </div>
            <div class="
            flex flex-col
            items-center
            ">
                <h3 class="
                HelveticaBold
                text-[15px]
                ">Partner Us:</h3>
                <div
                class="
                flex flex-row
                gap-[20px]
                "
                >
                    <img src={Terai}
                    class="
                    w-[75px]
                    "
                    ></img>
                    <img src={Perspektif}
                    class="
                    w-[75px]
                    "
                    ></img>
                </div>
            </div>
        </section>
       </div>
    </div>
  )
}

export default Halaman6