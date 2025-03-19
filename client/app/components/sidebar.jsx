import navigation from "@/public/data";

export default function SideBar() {
  return (
    <>
      <div className="bg-indigo-600 max-w-kg my-10 p-6 rounded-lg text-white absolute translate-x-[25%] sm:max-2xl:hidden">
        <h1 className="text-xl">Categorías</h1>
        <ul>
          {navigation.categories.map((category) => (
            <li
              key={category.name}
              className="bg-indigo-400 my-2 py-3 px-1 rounded-lg text-sm"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
