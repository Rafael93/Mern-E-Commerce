import navigation from "@/public/data";
import Image from "next/image";
import smartphones from "../../public/images/smartphones.jpg";

export default function SideBar() {
  return (
    <>
      <div className="bg-indigo-600 w-[18rem] h-[95vh] rounded-lg text-white fixed translate-x-[9%] translate-y-[-9%] justify-items-center z-1 sm:max-2xl:hidden">
        <div>
          <Image
            alt="publicity"
            width={250}
            height={100}
            src={smartphones}
            className="rounded-lg mx-[auto] mt-6"
          />
        </div>
        <h1 className="text-xl m-4">Categorías</h1>
        <ul>
          {navigation.categories.map((category) => (
            <li
              key={category.name}
              className="bg-indigo-400 my-4 py-2 mx-2 rounded-lg text-sm w-[10vw] text-center"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
