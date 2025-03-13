import React, { useEffect } from "react";
import Card from "./Card";
import StrategiMahasiswa from "../../../../assets/strategimahasiswa.png";
import TaketheTrash from "../../../../assets/takethetrash.png";
import Pilmapres from "../../../../assets/pilmapres.png";
import PersonalBranding from "../../../../assets/personalbranding.png";
import GaleryofLife from "../../../../assets/galeryoflife.png";

function Carousel() {
  return (
    <div className="carauselHalaman4">
      <div className="carousel-content">
        <Card
          id="1"
          img={StrategiMahasiswa}
          judul="Strategi Menjadi Mahasiswa Unggulan, Bagi Mahasiswa Baru"
          date1="Date"
          date2="NOV 15 2024"
          loc1="Location"
          loc2="Zoom Meeting"
          link="dfs"
        />
        <Card
          id="2"
          img={TaketheTrash}
          judul="Take the Trash: Kampus Bersih Mulai Dari Kita"
          date1="Date"
          date2="DEC 7 2024"
          loc1="Location"
          loc2="Taman Kampus 1 UTY"
          link="bla"
        />
        <Card
          id="3"
          img={Pilmapres}
          judul="Story of Pilmapres: Menjadi Mahasiswa Berprestasi Utama"
          date1="Date"
          date2="DEC 16 2024"
          loc1="Location"
          loc2="Taman Kampus 1 UTY"
          link="bi"
        />
        <Card
          id="4"
          img={PersonalBranding}
          judul="New Year, New Me: Personal Branding Sebagai Resolusi Mahasiswa di Tahun 2025"
          date1="Date"
          date2="DEC 23 2024"
          loc1="Location"
          loc2="Zoom Meeting"
          link="b3"
        />
        <Card
          id="5"
          img={GaleryofLife}
          judul="Galery of Life: Ekspresi Dari Melukis"
          date1="Date"
          date2="JAN 17 2024"
          loc1="Location"
          loc2="Taman Kampus 1 UTY"
          link="bp"
        />
      </div>
    </div>
  );
}

export default Carousel;
