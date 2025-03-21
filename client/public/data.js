const navigation = {
  categories: [
    {
      id: "tecnologia",
      name: "Tecnologia",
      featured: [
        {
          name: "Nuevos Lanzamientos",
          href: "#",
          imageSrc: "images/tech.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Celulares",
          href: "#",
          imageSrc: "images/smartphones.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "notebooks&Pc",
          name: "Notebooks & PC",
          items: [
            { name: "PC Armadas", href: "#" },
            { name: "Notebook", href: "#" },
            { name: "Desktop", href: "#" },
            { name: "Mini PC", href: "#" },
            { name: "Accesorios para notebook", href: "#" },
          ],
        },
        {
          id: "almacenamiento",
          name: "Almacenamiento",
          items: [
            { name: "HD", href: "#" },
            { name: "HD Externo", href: "#" },
            { name: "SSD 2.5", href: "#" },
            { name: "SSD M.2 SATA", href: "#" },
            { name: "SSD NVMe", href: "#" },
            { name: "SSD Externo Portátil", href: "#" },
            { name: "Pendrive", href: "#" },
            { name: "Micro SD", href: "#" },
            { name: "Servidor", href: "#" },
            { name: "Accesorios", href: "#" },
          ],
        },
        {
          id: "impresoras",
          name: "Impresoras",
          items: [
            { name: "Impresora Térmica", href: "#" },
            { name: "Impresora Laser", href: "#" },
            { name: "Impresora EcoTank", href: "#" },
            { name: "Impresora de Corte", href: "#" },
            { name: "Impresora Matricial", href: "#" },
            { name: "Componentes y Accesorios", href: "#" },
          ],
        },
      ],
    },
    {
      id: "hogar",
      name: "Hogar",
      featured: [
        {
          name: "Automatización Inteligente",
          href: "#",
          imageSrc: "/images/smarthouse.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Decoración",
          href: "#",
          imageSrc: "/images/deco.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "electrodomesticos",
          name: "Electrodomésticos",
          items: [
            { name: "Heladeras", href: "#" },
            { name: "Lavarropas", href: "#" },
            { name: "Cocinas", href: "#" },
            { name: "Hornos", href: "#" },
            { name: "Microondas", href: "#" },
            { name: "Aspiradoras", href: "#" },
            { name: "Calefacción", href: "#" },
            { name: "Ventilación", href: "#" },
            { name: "Climatización", href: "#" },
            { name: "Pequeños Electrodomésticos", href: "#" },
          ],
        },
        {
          id: "entretenimiento",
          name: "Entretenimiento",
          items: [
            { name: "TV", href: "#" },
            { name: "Audio", href: "#" },
            { name: "Proyectores", href: "#" },
            { name: "Consolas", href: "#" },
            { name: "Juegos", href: "#" },
          ],
        },
        {
          id: "belleza",
          name: "Belleza",
          items: [
            { name: "Cuidado de la Piel", href: "#" },
            { name: "Cuidado del Cabello", href: "#" },
            { name: "Maquillaje", href: "#" },
            { name: "Perfumes", href: "#" },
            { name: "Cuidado Personal", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Sobre nosotros", href: "/about-us" },
    { name: "Contactanos", href: "/contact-us" },
  ],
};

export default navigation;
