import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import "./css/Links.css";

export function Nav({ onSearch }) {
  const NavStlyled = styled.nav`
    background: rgba(32, 142, 102, 0.8);
    padding: 10px;
    border-radius: 5px;
    text-size: 20px;
  `;

  return (
    <>
      <Link className="Links" to="/">
        Logaut
      </Link>
      <Link className="Links" to="/about">
        About
      </Link>
      <Link className="Links" to="/home">
        Home
      </Link>
      <Link className="Links" to="/favorites">
        Favorites
      </Link>
      <NavStlyled>
        <SearchBar onsearch={onSearch} />
      </NavStlyled>
      <br />
    </>
  );
}
