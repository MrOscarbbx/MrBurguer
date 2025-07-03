import React, { useEffect, useRef } from "react";
import "./Logo.css";
import logoImg from "../assets/LogoAreglado.png";

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 700 && logoRef.current) {
        const scrollY = window.scrollY;
        // Efecto 3D simple: rotar según el scroll
        logoRef.current.style.transform = `rotateY(${scrollY / 10}deg) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="logo-3d">
      <img ref={logoRef} src={logoImg} alt="MrBurguer Logo" />
    </div>
  );
};

export default Logo;
