import style from "../estilos/Card.module.css";
import { NavLink } from "react-router-dom";
import {addFav,removeFav} from "../redux/action"
import {connect } from "react-redux"
import React,{ useState ,useEffect } from "react";

 function Card({id,name,status,species,gender,image,onClose,addFav,removeFav,myFavorites}){

  /* const {id,name,status,species,gender,image,onClose,addFav,removeFav,myFavorites}=props */
const [isFav,setIsFav]=useState(false)


const handleFavorite=()=>{
  if(isFav){
    setIsFav(false);
    removeFav(id)
  }else{
    setIsFav(true);
    
    addFav({id,name,status,species,gender,image})
  }
}

useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [id, myFavorites]);

  return (
    <div className={style.container}>
      
   
      <button className={style.favoritos} onClick={handleFavorite}>{isFav?"❤️" : "🤍"}</button>
   
 
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      
      <div className={style.info}>
        <NavLink to={`/detail/${id}` }>
          
        <img src={image} alt={name} className={style.photo} />
          <h2>Name: {name}</h2>
        
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
        </NavLink>
      </div>
    </div>
  );
}
 



const mapStateToProps=(state)=>{
  return{
    myFavorites:state.myFavorites
  }
}
  

 const mapDispatchToProps=(dispatch)=>{
  return {
    addFav:(character)=>{dispatch(addFav(character))},
    removeFav:(id)=>{dispatch(removeFav(id))}
  }
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)