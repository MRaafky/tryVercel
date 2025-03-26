import React from "react";
import { motion } from "framer-motion";
import anggotabaru from "../../assets/anggotabaru.png";
import Terai from "../../assets/LogoTerai.png";
import Hubungins from "../../assets/LogoHubung'ins.png";
import Perspektif from "../../assets/LogoPerspektif.png";

function Halaman6() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Let's Connect
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-5xl font-bold text-white  inline-block px-4 py-2"
          >
            with Us
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 flex justify-center"
        >
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={anggotabaru}
              alt="Team Members"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-7 md:space-y-9">
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4 lg:mb-[30px]">
                Supported By:
              </h3>
              <img
                src={Hubungins}
                alt="Hubungins"
                className="w-24 mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Partner Us:
              </h3>
              <div className="flex space-x-6 justify-center">
                <img
                  src={Terai}
                  alt="Terai"
                  className="w-24 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img
                  src={Perspektif}
                  alt="Perspektif"
                  className="w-24 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mobile Blobs */}
        <div className="block md:hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#b22e15]/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#e0c39f]/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#d67e45]/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Tablet Blobs */}
        <div className="hidden md:block lg:hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#b22e15]/30 rounded-full blur-3xl animate-blob-md"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#e0c39f]/30 rounded-full blur-3xl animate-blob-md animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#d67e45]/30 rounded-full blur-3xl animate-blob-md animation-delay-4000"></div>
        </div>

        {/* Desktop Blobs */}
        <div className="hidden lg:block">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#b22e15]/30 rounded-full blur-3xl animate-blob-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#e0c39f]/30 rounded-full blur-3xl animate-blob-lg animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#d67e45]/30 rounded-full blur-3xl animate-blob-lg animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}

export default Halaman6;
