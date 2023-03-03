import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './fav.css';

function Favorites() {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      {myFavorites.map((character,index) => {
        return (
          <div key={index.toString()}>
            <div className="Cardfav">
              <Link to={`/detail/${character.detailId}`}>
                <img className="IMGFav" src={character.image} alt="img" />
                <h1 className="Name">{character.name}</h1>
              </Link>
              <h1 className="Genero">Genero: {character.gender}</h1>
              <h1 className="Raza">Specie: {character.species}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
