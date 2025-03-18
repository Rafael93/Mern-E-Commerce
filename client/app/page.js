"use client";
import Carousel from "./components/carousel.jsx";
import Products from "./components/products.jsx";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Carousel />
        <h1 className="text-lg text-center text-white bg-[--secondary-color] w-[75rem] mx-auto py-2 rounded-lg md: w-auto  ">
          Ofertas
        </h1>
        <Products />
        <h1 className="text-lg text-center text-white bg-[--secondary-color] w-[75rem] mx-auto py-2 rounded-lg md: w-auto  ">
          Nuevos lanzamientos
        </h1>
        <Products />
        <h1 className="text-lg text-center text-white bg-[--secondary-color] w-[75rem] mx-auto py-2 rounded-lg md: w-auto  ">
          Notebooks
        </h1>
        <Products />
      </div>
    </>
  );
}
