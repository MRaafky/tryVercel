import React, { useEffect, useState } from "react";
import Cards from "./Card"

function Halaman5() {
  const cards = Cards; // Use original cards array for normal scrolling


  const [hoveredCardId, setHoveredCardId] = useState(null);
  return (
    <div
    class="
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
        <div>
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              data-id={card.id}
              onMouseOver={() => setHoveredCardId(card.id)}
              onMouseOut={() => setHoveredCardId(null)}
              style={{ '--position': `${card.id}` }}
            >
              <img src={card.gambar} alt={card.judul} className="card-image" />


              <div
                className="card-content"
                style={{
                  opacity: hoveredCardId === card.id ? "1" : "0",
                  transition: "0.5s",
                }}
              >
            <h2 className="card-title">{card.judul}</h2>
            <div className="containerDateLoc">
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
  )
}

export default Halaman5