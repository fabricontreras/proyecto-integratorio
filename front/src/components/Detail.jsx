import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Detail() {
  const Nombre = styled.h1`
    font-size: 42px;
    color: #fff;
    ${'' /* display: flex; */}
    padding:10px;
    position:absolute;
    left:11%;
    bottom:69%;
    &:hover {
      color: #35d;
    }
  `;
  const Color = styled.h1`
    color: #fff;
    display: flex;
  `;
  const Boton = styled.button`
    outline: none;
  `;
  const Img = styled.img`
    border-radius: 100%;
    position: absolute;
    left: 32%;
    top: 23%;
  `;
  const Div = styled.div`
    position: absolute;
    left: 51%;
    top: 21%;
    ${''/* border-right: 3px solid rgba(200, 200, 200, 0.6);  */}
    animation: blink 1s steps(1) infinite;
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 47%;
      }
    }
  `;
  const { detailId } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        console.log(char)
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <>
      <Boton>{<Link to="/home">INICIO</Link>}</Boton>
      <br />
      <Img src={character.image} alt={character.name} />
      <Div>
        <Color>Name: {<Nombre>{character.name}</Nombre>}</Color>
        <Color>Status: {character.status}</Color>
        <Color>Gender: {character.gender}</Color>
        <Color>Specie: {character?.species}</Color>
        <Color>Location: {character.origin?.name}</Color>
      </Div>
    </>
  );
}
