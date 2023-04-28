import style from "../estilos/Detail.module.css"
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );

    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.contenedor}>
      <div className={style.caracteristicas}>
      <h1>Name: {character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Specie: {character.species}</p>
      <p>Gender: {character.gender}</p>

      </div>
      
      <img src={character.image} alt="img" className={style.detalles} />
    </div>
  );
}

export default Detail;
