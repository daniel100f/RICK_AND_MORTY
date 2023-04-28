import React from "react"
import style from "../estilos/Favorites.module.css"
import Card from "./Card";
import { connect,useDispatch } from "react-redux";
import { filterCards,orderCards } from "../redux/action";
import { useState } from "react";

const Favorites=({myFavorites})=>{
    const [aux,setAux]=useState(false)
    const dispatch=useDispatch()
    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }
    
return(
    <div className={style.container}>
        <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="AllCharacters">AllCharacters</option>
        </select>
      
        { 
    myFavorites?.map(fav=>{
            return(
                <Card
                    key={fav.id}
                    id={fav.id}
                    name="daniel"
                    species={fav.species}
                    status={fav.status}
                    image={fav.image}
                    

                />
            )
        })
    }
    </div>
)

}
const mapStateToProps=(state)=>{
    
return{
    myFavorites:state.myFavorites
}
}
export default connect(
    mapStateToProps,
    null
  
)(Favorites)


 /*  { 
    myfavorites?.map(fav=>{
            return(
                <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    status={fav.status}
                    image={fav.image}
                    onClose={fav.onClose}

                />
            )
        })
    } */