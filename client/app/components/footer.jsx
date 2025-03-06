import Link from "next/link";
const pages = [
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Contactanos", href: "/contact-us" },
  { name: "Trabaja con nosotros", href: "#" },
  { name: "Marcas", href: "#" },
];

const socialMedia = [
  { name: "facebook", href: "#", src: "" },
  { name: "instagram", href: "#", src: "" },
  { name: "x", href: "#", src: "" },
  { name: "youtube", href: "#", src: "" },
  { name: "tiktok", href: "#", src: "" },
];

export function Footer() {
  return (
    <>
      <footer className="w-full h-auto border rounded-lg py-3">
        <ul className="flex justify-center mx-40">
          {pages.map((page) => (
            <li
              key={page.name}
              className="text-sm text-gray-600 mr-[3rem] rounded-lg px-4 py-3 hover:bg-indigo-600 hover:text-white"
            >
              <Link alt="" href={page.href}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
