import React from 'react'
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
    "
    >
        <img src={logo}
        class="
        w-[100px]
        "
        ></img>
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
                    w-[45px]
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
        Helvetica
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
        <p
        class="
        Helvetica
        text-white text-[10px]
        bg-[#191c1f]
        w-full h-[20px]
        text-center
        "
        >CopyRight@Unteyo Journey 2025</p>
    </footer>
  )
}

export default Footer