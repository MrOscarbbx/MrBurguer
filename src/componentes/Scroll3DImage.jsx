import React, { useEffect, useRef, useState } from "react";
import "./Scroll3DImage.css";

const Scroll3DImage = ({ src, alt = "Imagen 3D Scroll" }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imgRef.current || !isVisible) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Cuánto del componente está dentro de la vista (0 a 1)
      const visibleAmount = 1 - Math.abs(rect.top) / windowHeight;

      // Limitamos visibleAmount entre 0 y 1
      const clamped = Math.max(0, Math.min(visibleAmount, 1));

      // Aplicamos transformaciones según ese valor
      const rotateY = clamped * 60;
      const rotateX = clamped * 20;

      imgRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.1)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="scroll-3d-image-container">
      <img ref={imgRef} src={src} alt={alt} className="scroll-3d-image" />
    </div>
  );
};

export default Scroll3DImage;
