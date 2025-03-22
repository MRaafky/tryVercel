import React, { useEffect } from 'react';
import logo from "../../assets/logo.png"
import instagram from "../../assets/instagram.png"
import tiktok from "../../assets/tiktok.png"
import youtube from "../../assets/youtube.png"

function Footer() {
    const contacts = [
        {
            gambar : instagram,
            link : "skdnaksd"
        },
        {
            gambar : tiktok,
            link : "skdnaksd"
        },
        {
            gambar : youtube,
            link : "skdnaksd"
        },
    ]
    

  return (
    <footer
    class="
    w-full h-auto
    bg-[#2d3033]
    mt-[70px]
    flex flex-col
    items-center

    lg:mt-[30px]
    "
    >
        <img src={logo}
        class="
        w-[100px]
        "
        ></img>
        <p
        class="
        Helvetica
        text-[white]
        text-center
        text-[15px]
        p-[30px]
        mt-[-40px]
        "
        >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </p>
        <section
        class="
        flex flex-row
        gap-[20px]
        mt-[-10px]
        "
        >
            {contacts.map((contact) => (
                <li href={contact.link}
                class="
                list-none
                "
                >
                    <img src={contact.gambar}
                    class="
                    w-[40px]
                    "
                    ></img>
                </li>
            ))}
        </section>
        <section 
        class ="
        mt-[20px]
        w-full h-[50px]
        bg-[#191c1f]
        flex flex-row
        list-none
        HelveticaBold
        text-[15px]
        gap-[20px]
        items-center justify-center
        text-white
        "
        >
            <li>About Us</li>
            <li>Program</li>
            <li>News</li>
            <li>Contact Us</li>
        </section>
        <section
        class="
        w-full h-auto
        flex flex-col
        items-center justify-around
        p-[5px]
        bg-[#191c1f]
        "
        >
        <ul
        class="
        list-none
        text-[white] text-[10px]
        flex flex-row
        gap-[12px]
        "
        >
            <li>Privcy and Policy</li>
            <li>Terms and Condition</li>
            <li>Cookie Policy</li>
            <li>Recruitment Privacy</li>
        </ul>
        <p
        class="
        Helvetica
        text-white text-[9px]
        mt-[10px]
        "
        >Copyright@Unteyo Journey 2025</p>
        </section>
        
    </footer>
  )
}

export default Footer