import { NavLink, Link } from "react-router-dom";
import CardWidget from "../CartWidget/CartWidget";
import Logo from "./assets/rajinLogo.png";
import "./navBarStyle.css";
import "animate.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

function NavBar() {
  const { cart, sumQuantities } = useContext(CartContext);

  return (
    <nav className="navBar">
      <div>
        <Link to="/">
          <img src={Logo} alt="rajin logo" />
        </Link>
      </div>

      <div className="navbuttons">
        <div className="subnav">
          <button>ROPA</button>
          <div className="subnav-content animate__animated animate__fadeInDownBig">
            <NavLink to={"/subcategory/Ropa"} className="navBarLink">
              <button>MIRAR TODO</button>
            </NavLink>
            <NavLink to={"/category/Remera"} className="navBarLink">
              <button>REMERAS</button>
            </NavLink>
            <NavLink to={"/category/Buzo"} className="navBarLink">
              <button>BUZOS</button>
            </NavLink>
            <NavLink to={"/category/Campera"} className="navBarLink">
              <button>CAMPERAS</button>
            </NavLink>
          </div>
        </div>

        <div className="subnav">
          <button>ACCESORIOS</button>
          <div className="subnav-content animate__animated animate__fadeInDownBig">
            <NavLink to={"/subcategory/Accesorios"} className="navBarLink">
              <button>MIRAR TODO</button>
            </NavLink>
            <NavLink to={"/category/Mochila"} className="navBarLink">
              <button>MOCHILAS</button>
            </NavLink>
            <NavLink to={"/category/Gorro"} className="navBarLink">
              <button>GORROS</button>
            </NavLink>
            <NavLink to={"/category/Anteojo"} className="navBarLink">
              <button>ANTEOJOS</button>
            </NavLink>
            <NavLink to={"/category/Medias"} className="navBarLink">
              <button>MEDIAS</button>
            </NavLink>
          </div>
        </div>

        <div className="subnav">
          <button>CALZADO</button>
          <div className="subnav-content animate__animated animate__fadeInDownBig">
            <NavLink to={"/subcategory/Calzado"} className="navBarLink">
              <button>MIRAR TODO</button>
            </NavLink>
            <NavLink to={"/category/Zapatilla"} className="navBarLink">
              <button>ZAPATILLAS</button>
            </NavLink>
            <NavLink to={"/category/Zapato"} className="navBarLink">
              <button>ZAPATOS</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div>{sumQuantities(cart) > 0 && <CardWidget />}</div>
    </nav>
  );
}

export default NavBar;
