import { NavLink } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="title">
          <NavLink to="/" className="title-link">
          Quartz Quiz
          </NavLink>
        </h1>
        <ul className="linksInNavbar">
          <li><NavLink to="/" className="nav-links" >Home</NavLink></li>
          <li><NavLink to="#" className="nav-links" >Account</NavLink></li>
        </ul>
      </nav>
    </>
  );
};