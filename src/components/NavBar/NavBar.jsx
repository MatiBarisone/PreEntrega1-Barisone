import CardWidget from "../CartWidget/CartWidget";
import Logo from "./assets/rajinLogo.png";
import "./navBarStyle.css";

function NavBar() {
  return (
    <nav className="navBar">
      <div>
        <img src={Logo} alt="rajin logo" />
      </div>

      <div className="buttons">
        <button>HOMBRE</button>
        <button>MUJER</button>
        <button>ACCESORIOS</button>
        <button>CALZADO</button>
      </div>

      <div>
        <CardWidget number={5} />
      </div>
    </nav>
  );
}

export default NavBar;
