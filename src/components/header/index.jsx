import "./style.css";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img src={Logo} className="logo-img" />
      </div>
      <section className="nav-bar-links">
        <h5 className="links-navbar">Home</h5>
        <h5 className="links-navbar">Sobre</h5>
        <h5 className="links-navbar">Contato</h5>
      </section>
    </div>
  );
};
