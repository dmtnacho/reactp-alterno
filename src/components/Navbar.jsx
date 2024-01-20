import React from 'react';
import electroBitsLogo from '../img/brandlogo_oficial.png';
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Mothers",
    href: "/productos/moth",
  },
  {
    label: "CPUs",
    href: "/productos/cpu",
  },
  {
    label: "RAMs",
    href: "/productos/ram",
  },
  {
    label: "Almacenamiento",
    href: "/productos/alma",
  },
  {
    label: "GPUs",
    href: "/productos/gpu",
  },
  {
    label: "Refrigeracion",
    href: "/productos/refri",
  },
  {
    label: "Fuentes",
    href: "/productos/fuente",
  },
  {
    label: "Gabinetes",
    href: "/productos/gabi",
  },
  {
    label: "Perifericos",
    href: "/productos/peri",
  }
];

export const Navbar = () => {
  return (
    <header>
      <h1 className='header__logo'>
        <a href="/">
          <img src={electroBitsLogo} alt="Electro-Bits" className="logo__imagen" width={250} height={30} />
        </a>
      </h1>

      <div className='header__cateYcarro'>
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="categorias__botones"
          >
            {link.label}
          </Link>
        ))}
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar