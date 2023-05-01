import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./action-types";


const initialState={
    myFavorites:[],
    allCharacters:[]
}

const reducer=(state=initialState,{type,payload})=>{
switch(type){

    case ADD_FAV:
        return {
            ...state,
            myFavorites:[...state.allCharacters, payload],
            allCharacters:[...state.allCharacters, payload]
        }
        case REMOVE_FAV:
            return{...state,
            myFavorites:state.myFavorites.filter(fav=>fav.id!==payload)
        }
         case FILTER:
            const allCharactersFiltrados=state.allCharacters.filter(character=>
                character.gender === payload)
        return {...state,
            myFavorites:
            payload=== "allCharacters"
            ?[...state.allCharacters]
            :allCharactersFiltrados
        } 

       /*  case FILTER:
  let filteredArray;
  if (payload === "allCharacters") {
    filteredArray = [...state.allCharacters];
  } else {
    filteredArray = state.allCharacters.filter(
      character => character.gender === payload
    );
  }
  return {
    ...state,
    allCharacters: filteredArray,
    myFavorites: filteredArray */
  /* }; */



       
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


/* case ORDER:
    const allCharactersCopy={...state.allCharacters}
    return{
        ...state,
        myFavorites:
        payload==="A"
        ?allCharactersCopy.sort((a,b)=>a.id - b.id)
        :allCharactersCopy.sort((a,b)=>b.id - a.id)
    }
default:
    return {...state} */