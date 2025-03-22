import React, {useEffect, useState, useRef} from 'react'
import News1 from "../../assets/News/News1.jpg";
import News2 from "../../assets/News/News2.jpg";
import News3 from "../../assets/News/News3.jpg";
import { generateSequentialNumber } from './NewCount';
import "./News.css"

function Halaman3() {
  const [number, setNumber] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  const newsItems = [
    {
      id: 1,
      title: "Speecless! Pria Bagikan Kisah Cintanya Saat di Bangku SMA",
      isi: "Kisah inspiratif tentang pengalaman hidup yang mengajarkan banyak hal. Setiap kejadian memiliki makna yang mendalam.",
      image: News1,
      link: "bla",
    },
    {
      id: 2,
      title: "Cerita Inspiratif: Perjalanan Menuju Sukses",
      isi: "Kisah inspiratif tentang pengalaman hidup yang mengajarkan banyak hal. Setiap kejadian memiliki makna yang mendalam.",
      image: News2,
      link: "bla",
    },
    {
      id: 3,
      title: "Menakjubkan! Perubahan Hidup dalam 30 Hari",
      isi: "Kisah inspiratif tentang pengalaman hidup yang mengajarkan banyak hal. Setiap kejadian memiliki makna yang mendalam.",
      image: News3,
      link: "bla",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setNumber((prev) => (prev % 3) + 1);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = newsItems[number - 1].image;
    }
  }, [number]);

  return (
    <div
      id="news"
      class="
      w-screen
      flex flex-col
      text-[white]
      justify-center
      items-center
      z-[2]
      "
    >
      <h2 class="
      HelveticaBold
      text-[25px]
      mt-[100px]

      lg:text-[40px]
      ">
        Popular News
      </h2>
      <section
        class="
        w-full
        flex flex-col
        justify-center items-center

        lg:flex-row
                "
      >
        <div class="
        w-[200px] h-[400px]

        lg:w-full lg;h-full
        ">
          <img
            ref={imgRef}
           class="
            w-[200px]
            mt-[50px]
            "
            alt="Berita Farhankun"
          />
          </div>
        <div
          class="
          flex flex-col
          justify-center
          items-center
          gap-[10px]
          "
        >
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`news ${number === item.id ? "newsActive" : ""} 
              w-[300px] h-[100px] 
              p-[20px]
              overflow-hidden
              rounded-[20px]
              `}
              onMouseEnter={() => {
                setIsHovered(true);
                setNumber(item.id);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h3
              class="
              HelveticaBold
              text-[14px]
              "
              >{item.title}</h3>
              <p
              class="
              mt-[10px]
              Helvetica
              text-[12px]
              "
              >{item.isi}</p>
              <button
                class="
                text-[10px]
                w-[100px]
                border border-black
                rounded-[5px]
                mt-[15px]
                "
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Halaman3