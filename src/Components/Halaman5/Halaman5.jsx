import React, { useEffect, useState } from "react";
import Cards from "./Card"
import "./Halaman5.css"

function Halaman5() {
  const cards = Cards; // Use original cards array for normal scrolling


  const [hoveredCardId, setHoveredCardId] = useState(null);
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
        "
        >Past Events</h2>
        <div
        class="
        card-container
        w-[90%] h-[280px]
        flex flex-row
        overflow-hidden
        relative
        justify-center items-center 
        "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
              card
              grid
              w-[200px] h-fit
              absolute top-[0%] left-[100%]
              "
              data-id={card.id}
              onMouseOver={() => setHoveredCardId(card.id)}
              onMouseOut={() => setHoveredCardId(null)}
              style={{ '--position': `${card.id}` }}
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