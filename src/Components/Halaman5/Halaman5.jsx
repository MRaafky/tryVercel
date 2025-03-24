import React, { useEffect, useRef, useState } from 'react';
import Cards from './Card';
import './Halaman5.css';

function Halaman5() {
  const cards = Cards; // Array cards dari Card.js
  const [hoveredCardId, setHoveredCardId] = useState(null); // Untuk interaksi hover
  const containerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Duplikasi card-container sebanyak 5 kali
  const duplicatedContainers = Array.from({ length: 3 }, () => cards);

  // Fungsi untuk memulai autoscroll
  const startAutoScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!autoScrollIntervalRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        container.scrollLeft += 1; // Geser posisi scroll sebesar 1px
        // Jika mencapai ujung kanan, reset ke awal
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
          container.scrollLeft = 0;
        }
      }, 10); // Interval 20ms bisa disesuaikan untuk mengatur kecepatan
    }
  };

  // Fungsi untuk menghentikan autoscroll
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Gunakan useEffect untuk memastikan autoscroll berjalan segera setelah DOM siap
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollLeft = 0; // Pastikan mulai dari posisi awal
    startAutoScroll();

    const handleScroll = () => {
      // Jaring pengaman: jika mencapai ujung kanan, reset ke awal
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      stopAutoScroll();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Deteksi interaksi manual dengan event onWheel
  const handleWheel = () => {
    // Hentikan autoscroll saat pengguna melakukan scroll manual
    stopAutoScroll();
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    // Setelah 3 detik tanpa interaksi, mulai kembali autoscroll
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 1000);
  };

  return (
    <div className="bg-[black]">
      <div  className="containerHal5 flex flex-col items-center">
        <h2 className="HelveticaBold text-[white] text-[25px] mt-[100px] lg:text-[40px]">
          Past Events
        </h2>
        <div className='blur-container w-[90%]'>
        <div
          ref={containerRef}
          className="card-container-wrapper w-[90%] h-max flex flex-row overflow-x-scroll relative justify-center items-center mt-[30px] gap-[50px]
          lg:gap-[50px] lg:mt-[50px]
          "
          style={{ scrollBehavior: 'smooth', width: '100%' }}
          onWheel={handleWheel}
        >
          {duplicatedContainers.map((cardSet, containerIndex) => (
            <div key={containerIndex} className="card-container flex gap-[50px]">
              {cardSet.map((card) => (
                <div
                  key={card.id}
                  className="card grid w-[200px] h-fit flex-shrink-0 lg:w-[350px] lg:min-w-[350px]"
                  data-id={card.id}
                  onMouseOver={() => setHoveredCardId(card.id)}
                  onMouseOut={() => setHoveredCardId(null)}
                  style={{
                    '--position': `${card.id}`,
                    width: '200px',
                    marginRight: card.id !== cards.length - 1 ? '16px' : '0px',
                  }}
                >
                  <img
                    src={card.gambar}
                    alt={card.judul}
                    className="card-image rounded-[10px]"
                  />
                  <div
                    className="card-content flex flex-col w-full h-full text-[white] backdrop-blur-[10px] justify-end p-[7%] rounded-[10px]"
                    style={{
                      opacity: hoveredCardId === card.id ? '1' : '0',
                      transition: '0.5s',
                    }}
                  >
                    <h2 className="card-title HelveticaBold text-[12px]">
                      {card.judul}
                    </h2>
                    <div className="containerDateLoc Helvetica w-full h-fit flex flex-row gap-[2px] text-[9px]">
                      <h3>Date:</h3>
                      <p className="card-date">{card.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Halaman5;
