import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({ id, img, judul, date1, date2, loc1, loc2, link }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="cardHalaman3"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img src={img} className="imgcardHalaman3" />
      <div
        className="infocardHalaman3"
        style={{
          opacity: isHovered ? "1" : "0",
          transition: "0.5s",
        }}
      >
        <h3 className="judulcardHalaman3">{judul}</h3>
        <div className="dateloc">
          <h4 className="date1">{date1}</h4>
          <h4 className="loc1">{loc1}</h4>
          <p className="date2">{date2}</p>
          <p className="loc2">{loc2}</p>
        </div>
        <button className="btninfo" href={link}>
          More Info
        </button>
      </div>
    </div>
  );
}

export default Card;
