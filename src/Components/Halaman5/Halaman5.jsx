import React, { useEffect, useRef, useState } from 'react';
import Cards from "./Card"
// import detectScroll from './Scroll';
import "./Halaman5.css"

function Halaman5() {
  const cards = Cards; // Use original cards array for normal scrolling
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const containerRef = useRef(null);

  const adjustContainerWidth = () => {
    const container = containerRef.current;
    if (!container) return;

    // Ambil semua elemen dengan kelas 'card'
    const cardElements = container.querySelectorAll('.card');
    let totalWidth = 0;

    cardElements.forEach((card) => {
      totalWidth += card.offsetWidth;
    });

    // Misalnya jika menggunakan gap antar kartu dalam CSS (misal 16px)
    const gap = 16;
    totalWidth += gap * (cardElements.length - 1);

    // Tetapkan lebar container secara eksplisit
    container.style.width = `${totalWidth}px`;
  };

  useEffect(() => {
    adjustContainerWidth();

    // Sesuaikan ulang saat window di-resize agar responsif
    window.addEventListener('resize', adjustContainerWidth);
    return () => {
      window.removeEventListener('resize', adjustContainerWidth);
    };
  }, [cards]); // Jika daftar cards bisa berubah

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      
      if (scrollProgress >= 99) {
        const firstCard = container.firstElementChild;
        if (firstCard) {
          const cardWidth = firstCard.offsetWidth;
          
          // Memindahkan kartu pertama ke akhir container
          container.appendChild(firstCard);
          // Sesuaikan scrollLeft dengan lebar kartu + gap
          container.scrollLeft -= (cardWidth + 16);
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div class="bgHal5">
      <div
    class="
    containerHal5
    flex flex-col
    items-center
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
        >Past Events</h2>
        <div
        class="
        card-container
        w-[90%] h-max
        flex flex-row
        overflow-hidden
        relative
        justify-center items-center
        mt-[30px]
        
        lg:gap-[50px]
        "
        ref={containerRef}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="
              card
              grid
              w-[200px] h-fit flex-shrink-0


              lg:w-[350px] lg:min-w-[350px]
              "
              data-id={card.id}
              onMouseOver={() => setHoveredCardId(card.id)}
              onMouseOut={() => setHoveredCardId(null)}
              style={{ '--position': `${card.id}`, width: '200px',  marginRight: card.id !== cards.length - 1 ? '16px' : '0px', }}
            >
              <img src={card.gambar} alt={card.judul} className="card-image rounded-[10px]" />


              <div
                className="card-content
                flex flex-col
                w-full h-full
                text-[white]
                backdrop-blur-[10px]
                justify-end
                p-[7%]
                gap-[3%]
                rounded-[10px]
                "
                style={{
                  opacity: hoveredCardId === card.id ? "1" : "0",
                  transition: "0.5s",
                }}
              >
            <h2 className="card-title
            HelveticaBold
            text-[12px]
            ">{card.judul}</h2>
            <div className="containerDateLoc
            Helvetica
            w-full h-fit
            flex flex-row
            gap-[20px]
            text-[9px]
            ">
              <div>
                <h3>Date</h3>
                <p className="card-date">{card.date}</p>
              </div>
              <div>
                <h3>LOCATION</h3>
                <p className="card-location">{card.loc}</p>
              </div>
            </div>
          </div>
            </div>
             ))}
        </div>
    </div>
    </div>
  )
}

export default Halaman5