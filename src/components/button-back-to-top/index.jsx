import { useState, useEffect } from "react";
import "./style.css";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listener para detectar a posição de rolagem da página
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Removendo o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adicionando animação suave ao scroll
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};
