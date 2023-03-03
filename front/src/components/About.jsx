import styled from "styled-components";

const nombre = "Fabricio";
const apellido = "Contreras";
const edad = 21;

const Color = styled.h1`
  color: rgba(190, 255, 0, .9);
  font-family: 'Courier New', monospace;
  font-size: 2em;
  display: inline-block;
  
  ${'' /* border-right: 3px solid rgba(200, 200, 200, 0.6); */}
  animation: blink 1s steps(1) infinite;
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 29ch;
    }
  }
`;

export default function About() {
  return (
    <>
      <Color>{`Devoloper: ${nombre} ${apellido}`}</Color>
      <br />
      <Color>{`Edad: ${edad}`}</Color>
    </>
  );
}
