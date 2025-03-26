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
      <footer className="w-full h-auto border rounded-lg select-none inherit z-0">
        <div className="mx-2 my-1 flex flex-col items-center">
          <ul className="flex flex-wrap justify-center mx-5 mt-5">
            {pages.map((page) => (
              <li
                key={page.name}
                className="text-sm text-gray-600 mr-4 mb-2 rounded-lg px-4 py-3 hover:bg-indigo-600 hover:text-white"
              >
                <Link alt="" href={page.href}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap justify-center mx-5 my-6">
            {socials.map((social) => (
              <li key={social.name} className="mx-3 mb-2 hover:scale-150">
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
          <div className="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14179.71840297349!2d-55.8792704!3d-27.315391749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spy!4v1742993022854!5m2!1ses-419!2spy"
              width="1000"
              height="350"
              loading="lazy"
              className="border border-indigo-900 border-4 rounded-2xl mx-auto mb-3"
            ></iframe>
            <p className="text-sm text-gray-600 text-center font-medium">
              Dirección: Calle Carlos Antonio López c/ General Caballas N° 1526.
              Encarnación. Paraguay
            </p>
          </div>
          <hr className="w-[90%] justify mx-auto" />
          <p className="my-4 text-center text-sm text-gray-600">
            &#169; 2025 Rafael Gamarra, Developer. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
