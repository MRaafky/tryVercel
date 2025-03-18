import React from 'react'
import anggota from "../../assets/anggota.png"
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
    ">
        <h2
        class="
        HelveticaBold
        text-[30px]
        "
        >Let's Connect</h2>
        <h2
        class="
        HelveticaBold
        text-[25px]
        "
        >With Us</h2>
        <div
        class="
        imgContainerHal6
        w-auto
        mt-[100px]
        overflow-hidden
        "
        >
            <img src={anggota}
            class="
            imgHal6
            w-[900px] max-w-none
            relative
            top-[0] left-[-20%]
            "
            ></img>
            <img src={anggota}
            class="
            imgHal6
            w-[800px] max-w-none
            relative
            top-[50px] left-[25%]
            "
            ></img>
        </div>
       <div class="
       containerFilterImg
       w-screen
       h-fit
       ">
        <div
        class="
        filterImg
        w-[1000px]
        h-[100px]
        bg-[black]
        blur-[20px]
        z-1
        relative
        top-[-30%]
        left-[-10%]
        overflow-hidden
        "
        ></div>
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