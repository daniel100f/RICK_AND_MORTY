import React from "react";
import style from "../estilos/About.module.css";

function About() {
  return (
    <div className={style.container}>
      
      <div className={style.caracteristicas}>

<h1>Name: Daniel Villarraga. </h1>
<p>Origin: Colombia-Cundinamarca-Chía</p>
<p>Specie: Human </p>
<p>Gender: Man</p>
<p>State:  Henry Student</p>

</div>
<div><img src="https://construyendociudad.com/wp-content/uploads/2023/01/santa_fe.png" alt="" className={style.image}/></div>


    </div>
  );
}

export default About;
