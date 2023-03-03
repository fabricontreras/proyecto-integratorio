import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './css/Card.css';
import { addFavorite, deleteFavorite } from "./actions";

  export default function Card({detailId,onClose,name,species,gender,image,id}) {

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } 
    if(!isFav) {
      setIsFav(true);
      dispatch(
        addFavorite({detailId,onClose,name,species,gender,image,id})
        );
      }
    };
    
  return (
    <div className='Card'>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button className="BTN" onClick={onClose}>X</button>
      <Link to={`/detail/${detailId}`}>
        <img className="IMG" src={image} alt="img" />
        <h1 className="Name">{name}</h1>
      </Link>
      <h1 className="Genero">Genero: {gender}</h1>
      <h1 className="Raza">Specie: {species}</h1>
    </div>
  );
}
