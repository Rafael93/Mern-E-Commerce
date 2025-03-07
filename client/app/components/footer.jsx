import Link from "next/link";
import Image from "next/image";

const pages = [
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Contactanos", href: "/contact-us" },
  { name: "Trabaja con nosotros", href: "#" },
  { name: "Marcas", href: "#" },
];

const socials = [
  { name: "facebook", href: "#", src: "/images/facebook.png" },
  { name: "instagram", href: "#", src: "/images/instagram.png" },
  { name: "x", href: "#", src: "/images/tiktok.png" },
  { name: "youtube", href: "#", src: "/images/x.png" },
  { name: "tiktok", href: "#", src: "/images/youtube.png" },
];

export function Footer() {
  return (
    <>
      <footer className="sticky w-full h-auto border rounded-lg">
        <div className="md: flex mx-1 my-1 justify-center">
          <ul className="flex justify-center mx-40 mt-5 md:flex-col mx-6">
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
          <ul className="flex justify-center mx-40 my-6 md:mx-1 flex-col">
            {socials.map((social) => (
              <li key={social.name} className="mx-5 hover:scale-150">
                <Link href={social.href}>
                  <Image
                    src={social.src}
                    width={20}
                    height={20}
                    alt={social.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <hr className="w-[90%] justify mx-auto" />
          <p className="my-9 text-center text-sm text-gray-600">
            &#169; 2025 tu compañía, Inc. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
