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

    md:h-[120px]

    lg:flex-row-reverse
    lg:h-[120px]
    lg:pt-[10px]
    lg:pl-[200px] lg:pr-[130px]
    `}
    >
         <FontAwesomeIcon icon={faBars} 
         onClick={onNav}
         class="
         onHamburger
        text-[white]
        w-[38px]
        relative
        top-[-7px]

        md:w-[48px]
        md:flex
        md:top-[-10px]

        lg:hidden
        " />
        <ul
        class="
        lgHeader
        hidden
        Helvetica
        text-[white]
        transition-[0.1s]
        cursor-[pointer]

        lg:flex lg:flex-row
        lg:gap-[100px]
        lg:p-[30px]
        lg:text-[18px]
        "
        >
            <li>About Us</li>
            <li>Program</li>
            <li>News</li>
            <li>Contact Us</li>
        </ul>
        <img src={logo}
        class="
        w-[92.48px] h-[100px]
        relative
        top-[-10px]

        md:w-[110.976px] md:h-[120px]
        "></img>
        <div 
        className={`Navbar ${isActive ? 'active' : ''} absolute
        top-[0px] left-[0px]
        flex flex-col lg:hidden`}>
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