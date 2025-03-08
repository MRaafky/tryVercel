import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const onNav = () => {
      setIsActive(!isActive);
    };
  

    useEffect(() => {
        const handleScroll = () => {
        //   if (window.scrollY > 0) {
        //     header.classList.add("scrolled");
        //   } else {
        //     header.classList.remove("scrolled");
        //   }
        setIsScrolled(!isScrolled)
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div className={`containerHeader ${isScrolled ? "scrolled" : ""}
    flex flex-row
    w-full h-[100px]
    justify-between
    pt-[20px]
    pl-[20px]
    pr-[20px]
    bg-none
    fixed top-[0]
    z-3
    `}
    >
         <FontAwesomeIcon icon={faBars} 
         onClick={onNav}
         class="
         onHamburger
        text-[white]
        w-[43px]
        relative
        top-[-7px]
        " />
        <img src={logo}
        class="
        w-[92.48px] h-[100px]
        relative
        top-[-10px]
        "></img>
        <div 
        className={`Navbar ${isActive ? 'active' : ''} absolute
        top-[0px] left-[0px]
        flex flex-col`}>
            <ul class="
            HelveticaBold
            text-[black] text-[18px]
            w-screen
            bg-[white]
            flex flex-col
            p-[25px]
            gap-[15px]
            ">
                <li>About Us</li>
                <li>Program</li>
                <li>News</li>
                <li>Contact Us</li>
            </ul>
            <div class="
            w-screen h-[100px]
            bg-[black]
            flex flex-row
            justify-between
            pt-[10px]
            pl-[20px]
            pr-[20px]
            pb-[0px]
            ">
                <FontAwesomeIcon icon={faBars} 
                onClick={onNav}
                class="
                offHamburger
            text-[white]
            w-[43px]
            relative
            top-[-7px]
            " />
            <img src={logo}
            class="
            w-[92.48px] h-[100px]
            relative
            top-[-10px]
            "></img>
            </div>
        </div>
    </div>
  )
}

export default Header