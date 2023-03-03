import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { Nav } from "./components/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form";
import styled from "styled-components";
import Favorites from "./components/Favorite/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  let username = "fabricontre12@gmail.com";
  let password = "asd123";

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((a) => a.id !== id));
  };
  // const Err = styled.h1`
  //   color: #fff;
  //   font-size: 120px;
  // `;

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" />
        <Route path="/favorites" element={<Favorites/>} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        {/* <Route path="*" element={<Err>404</Err>} /> */}
      </Routes>
    </div>
  );
}

export default App;
