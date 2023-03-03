import { useState } from "react";
import styled from "styled-components";
import './css/Search.css'

export default function SearchBar({ onsearch }) {
  const Boton = styled.button`
    margin: 2px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background: #000;
      color: #fff;
      border: solid #fff 2px
    }
  `;

  const [character, setCharacter] = useState('');

  const handleChange = (e) => {
    setCharacter(e.target.value)
  }

  return (
    <div>
      <input className="input" type="number" value={character} onChange={handleChange}/>
      <Boton onClick={() => onsearch(character)}>Agregar</Boton>
    </div>
  );
}
