import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./action-types";


const initialState={
    myFavorites:[],
    allCharacters:[]
}

const reducer=(state=initialState,{type,payload})=>{
switch(type){

   
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

      case REMOVE_FAV:
      return { ...state, myFavorites: payload, /* allCharacters: payload */ };

       case FILTER:
            const allCharactersFiltrados=state.allCharacters.filter(character=>
                character.gender === payload)
        return {...state,
            myFavorites:
            payload=== "allCharacters"
            ?[...state.allCharacters]
            :allCharactersFiltrados
        } 
 case ORDER:
  const allCharactersCopy = [...state.allCharacters]; 
  const sortedArray =
    payload === "A"
      ? allCharactersCopy.sort((a, b) => a.id - b.id)
      : allCharactersCopy.sort((a, b) => b.id - a.id);
  return {
    ...state,
    myFavorites: sortedArray
  }


 default:
  return { ...state };

}
}

export default reducer;







   