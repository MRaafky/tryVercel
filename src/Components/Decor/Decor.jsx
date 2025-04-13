import React from "react";
import like from "../../assets/like.png";
import love from "../../assets/love.png";
import WaveAnimation from "../../Components/WaveDot";
import "./Decor.css";

function Decor() {
  return (
    <div className="absolute w-full h-[300%] overflow-hidden z-[1] left-0 top-0">
      <img
        className="
                 like
                 relative
                 w-[60px] left-[50px] top-[120px]
                 md:w-[75px] md:left-[120px] md:top-[320px]
                 lg:w-[80px] lg:left-[180px] lg:top-[180px]
             "
        src={like}
        alt="Like icon"
      />
      <img
        className="
                 love
                 absolute
                 w-[70px] left-[280px] top-[400px]
                 md:w-[85px] md:left-[580px] md:top-[610px]
                 lg:w-[90px] lg:left-[1250px] lg:top-[450px]
             "
        src={love}
        alt="Love icon"
      />
      <div
        className="
                 spray1Decor
                 absolute
                 w-[300px] h-[300px]
                 top-[-200px]
                 blur-[90px]
                 left-[290px]
                 rounded-[50px]
                 md:left-[600px] md:top-[-150px] md:w-[350px] md:h-[350px] md:blur-[100px]
                 lg:left-[1250px] lg:top-[-180px] lg:blur-[125px]
             "
      ></div>
      <WaveAnimation className="wavecontainer" />
      <div
        className="
                 spray2Decor
                 absolute
                 w-[200px] h-[300px]
                 blur-[70px]
                 z-[0]
                 rounded-[100px]
                 top-[600px] left-[-100px]
                 md:w-[300px] md:h-[400px] md:left-[-200px] md:top-[950px] md:blur-[100px]
                 lg:w-[400px] lg:h-[500px] lg:top-[650px] lg:left-[-300px] lg:blur-[100px]
             "
      ></div>
      <div
        className="
                 spray2-2Decor
                 absolute
                 w-[200px] h-[300px]
                 blur-[70px]
                 z-[0]
                 rounded-[100px]
                 top-[600px] left-[-130px]
                 md:w-[300px] md:h-[350px] md:left-[-180px] md:top-[900px] md:blur-[100px]
                 lg:w-[400px] lg:h-[400px] lg:top-[700px] lg:left-[-280px] lg:blur-[120px]
             "
      ></div>
      <div
        className="
                 spray3Decor
                 absolute
                 w-[250px] h-[250px]
                 blur-[70px]
                 z-[1]
                 rounded-[200px]
                 top-[1000px] right-[-50px]
                 md:w-[450px] md:h-[450px] md:right-[10px] md:top-[1320px] md:blur-[170px]
                 lg:w-[450px] lg:h-[450px] lg:rounded-[50%] lg:right-[50px] lg:top-[900px] lg:blur-[200px]
             "
      ></div>
    </div>
  );
}

export default Decor;
