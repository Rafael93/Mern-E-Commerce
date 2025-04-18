"use client";
import React, { useState } from "react";
import navigation from "@/public/data";

export default function SideBar() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSections = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <>
      <div className="hidden 2xl:block bg-indigo-500 min-w-[15%] max-h-[100%] rounded-lg text-white z-1 mx-5 my-[2.5rem]">
        <h1 className="text-xl m-6 text-center">Categorías</h1>
        <ul className="bg-indigo-700 border rounded-2xl mx-6">
          {navigation.categories.map((category) => (
            <li
              key={category.name}
              className="relative transition-transform duration-600 ease-in-out transform"
            >
              <div
                className="py-3 mx-auto text-sm text-center cursor-pointer max-w-fit hover:scale-110 hover:bg-white hover:text-indigo-900 rounded-lg px-12 my-4"
                onClick={() => handleSections(category)}
              >
                {category.name}
              </div>
              {/* Mostrar secciones como sublista */}
              {activeCategory === category && (
                <ul className="bg-indigo-700 py-1 mx-auto rounded-lg text-sm w-[9vw] text-center cursor-pointer border mb-3">
                  {category.sections.map((section, j) => (
                    <li
                      key={j}
                      className="m-2 py-1 rounded-lg text-sm text-center py-4 hover:bg-indigo-400"
                    >
                      {section.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
