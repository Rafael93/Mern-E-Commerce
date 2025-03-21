import navigation from "@/public/data";

export default function SideBar() {
  return (
    <>
      <div className="bg-indigo-500 min-w-[15%] max-h-[100%] rounded-lg text-white z-1 mx-auto my-[2.5rem] max-[600px]:max-2xl:hidden">
        <div></div>
        <h1 className="text-xl m-6">Categorías</h1>
        <ul>
          {navigation.categories.map((category) => (
            <li
              key={category.name}
              className="bg-indigo-700 m-4 py-2 mx-6 rounded-lg text-sm w-[10vw] text-center"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
