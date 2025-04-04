"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import smarthouse from "../../public/images/smarthouse.jpg";
import deco from "../../public/images/deco.jpg";

const images = [smarthouse, deco]; // Array de imágenes

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000); // Cambia cada 8000 ms (3 segundos)

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-fit border border-4 border-grey-100 rounded-lg flex justify-center my-10 mx-auto w-[60%] h-[50vh] overflow-hidden z-[-1] max-sm:max-md:h-[30vh]">
      <div className="relative w-full h-full transition-opacity duration-500 max-sm:max-md:h-[30vh]">
        <Image
          alt="carouselImage"
          src={images[currentIndex]}
          width={1200}
          className="transition-opacity duration-500" // Animación de transición
          priority={false}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Flecha Izquierda */}
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 mx-5"
        onClick={() => console.log("click")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 bg-white rounded-full border border-black cursor-pointer hover:bg-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </div>

      {/* Flecha Derecha */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mx-5"
        onClick={() => console.log("click")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 bg-white rounded-full border border-black cursor-pointer hover:bg-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
