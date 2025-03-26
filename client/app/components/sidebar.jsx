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
      <div className="bg-indigo-500 min-w-[15%] max-h-[100%] rounded-lg text-white z-1 mx-auto my-[2.5rem] max-[600px]:max-2xl:hidden">
        <h1 className="text-xl m-6 text-center">Categorías</h1>
        <ul className="bg-indigo-700 border rounded-2xl mx-4">
          {navigation.categories.map((category) => (
            <li
              key={category.name}
              className="relative transition-transform duration-600 ease-in-out transform"
            >
              <div
                className="py-3 mx-auto text-sm text-center cursor-pointer hover:scale-110"
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
                      className="m-2 py-1 rounded-lg text-sm text-center hover:bg-indigo-400"
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
