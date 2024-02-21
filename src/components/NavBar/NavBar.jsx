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
            <button>MIRAR TODO</button>
            <button>MOCHILAS</button>
            <button>GORROS</button>
            <button>ANTEOJOS</button>
            <button>MEDIAS</button>
          </div>
        </div>

        <div className="subnav">
          <button>CALZADO</button>
          <div className="subnav-content animate__animated animate__fadeInDownBig">
            <button>MIRAR TODO</button>
            <button>ZAPATILLAS</button>
            <button>ZAPATOS</button>
          </div>
        </div>
      </div>

      <div>{sumQuantities(cart) > 0 && <CardWidget />}</div>
    </nav>
  );
}

export default NavBar;
