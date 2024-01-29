import React from 'react';
import alternoLogo from '../img/brandlogo_oficial.png';
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shirts",
    href: "/productos/shir",
  },
  {
    label: "Jackets",
    href: "/productos/jack",
  },
  {
    label: "Pants",
    href: "/productos/pant",
  },
  {
    label: "Skateboarding",
    href: "/productos/skat",
  },
  {
    label: "Accessories",
    href: "/productos/acce",
  }
];

export const Navbar = () => {
  return (
    <header>
      <h1 className='header__logo'>
        <a href="/">
          <img src={alternoLogo} alt="Alterno Logo" className="logo__imagen" width={250} height={30} />
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