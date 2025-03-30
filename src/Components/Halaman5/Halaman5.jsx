import React, { useEffect, useRef, useState } from 'react';
import Cards from './Card';
import './Halaman5.css';

function Halaman5() {
  const cards = Cards; // Array cards dari Card.js
  const containerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  
  // State untuk menampilkan nilai scrollLeft
  const [currentScroll, setCurrentScroll] = useState(0);

  // Deteksi perangkat yang mendukung touch (mobile & tablet)
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Duplikasi card-container sebanyak 5 kali
  const duplicatedContainers = Array.from({ length: 5 }, () => cards);

  // Fungsi untuk mereset scroll, dengan threshold yang berbeda untuk perangkat touch
  const resetScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const resetThreshold = isTouchDevice ? 500 : 1; // Threshold yang lebih longgar untuk perangkat touch
    if (container.scrollLeft >= maxScrollLeft - resetThreshold) {
      container.scrollLeft = 0;
      setCurrentScroll(0); // Perbarui state scroll
    }
  };

  // Fungsi untuk memulai auto scroll
  const startAutoScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!autoScrollIntervalRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        container.scrollLeft += 1;
        setCurrentScroll(container.scrollLeft);
        resetScroll();
      }, 20);
    }
  };

  // Fungsi untuk menghentikan auto scroll
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Pastikan posisi awal scroll diatur ke 0
    container.scrollLeft = 0;
    setCurrentScroll(0);
    startAutoScroll();

    // Update nilai scrollLeft dan reset scroll jika diperlukan
    const handleScroll = () => {
      setCurrentScroll(container.scrollLeft);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Delay sebelum reset (untuk mengantisipasi inertia atau bounce)
      scrollTimeoutRef.current = setTimeout(() => {
        resetScroll();
        setCurrentScroll(container.scrollLeft);
      }, isTouchDevice ? 0 : 0);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      stopAutoScroll();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isTouchDevice]);

  // Tangani event sentuhan pada perangkat touch (mobile & tablet)
  const handleTouchStart = () => {
    stopAutoScroll();
  };

  const handleTouchEnd = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      resetScroll();
      startAutoScroll();
    }, 300);
  };

  return (
    <div className="bg-[#a1a5]">
      <div className="containerHal5 flex flex-col items-center">
        <h2 className="HelveticaBold text-[white] text-[25px] mt-[100px] lg:text-[40px]">
          Unteyo Journey
        </h2>
        {/* Tampilan nilai scrollLeft sehingga Anda dapat memonitornya */}
        <p className="text-white mt-4">
          Scroll Position: {currentScroll}
        </p>
        <div
          ref={containerRef}
          className="card-container-wrapper w-[90%] h-max flex flex-row overflow-x-scroll relative justify-center items-center mt-[30px]"
          style={{
            scrollBehavior: 'smooth',
            width: '100%',
            // Untuk perangkat touch, atur scrolling agar lebih terkontrol
            WebkitOverflowScrolling: isTouchDevice ? 'auto' : 'touch',
            touchAction: 'pan-x',
          }}
          onWheel={() => {}}
          onTouchStart={isTouchDevice ? handleTouchStart : undefined}
          onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
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
  );
}

export default Halaman5;
