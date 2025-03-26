import Carousel from "./components/carousel.jsx";
import Products from "./components/products.jsx";
import SideBar from "./components/sidebar.jsx";
import AdsSideBar from "./components/adsSideBar";
import Tag from "./components/tag.jsx";

export default function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="max-w-[1100px] mx-auto">
          <Carousel />
          <Tag text="Ofertas" />
          <Products />
          <Tag text="Nuevos Lanzamientos" />
          <Products />
          <Tag text="Gaming" />
          <Products />
        </div>
        <AdsSideBar />
      </div>
    </>
  );
}
