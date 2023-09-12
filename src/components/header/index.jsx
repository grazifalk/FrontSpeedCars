import "./style.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img src={Logo} className="logo-img" />
      </div>
      <section className="nav-bar-links">
        <Link to="/" className="links-navbar">Home</Link>
        <Link to="/renter" className="links-navbar">Locatário</Link>
        <Link to="/register" className="links-navbar">Cadastro</Link>
        {/* <h5 className="links-navbar">Contato</h5> */}
      </section>
    </div>
  );
};
