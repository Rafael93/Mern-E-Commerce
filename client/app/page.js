"use client";
import Carousel from "./components/carousel.jsx";
import Products from "./components/products.jsx";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Carousel />
        <h1 className="text-lg text-center text-white bg-[--secondary-color] w-[1200] mx-auto py-2 rounded-lg md: w-auto  ">
          Ofertas
        </h1>
        <Products />
      </div>
    </>
  );
}
