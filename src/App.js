import Cards from "./components/Cards.jsx";

import Nav from "./components/Nav";
import { useState , useEffect} from "react";
import axios from "axios";
import { Route,Routes,useLocation,useNavigate } from "react-router-dom";
import About from "./vistas/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";




function App() {
  const location= useLocation()
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const email = 'daniel@gmail.com';

  const password = 'santafe10';

const login=(userData)=>{
  if(userData.email===email && userData.password===password){
    setAccess(true);
    navigate("/home");

  }
}
useEffect(()=>{
   !access&&navigate("/") 
}, [access, navigate])

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  return (
    <div className="App">
      {location.pathname!=="/"&& <Nav onSearch={onSearch} access={access} setAccess ={setAccess} />}
     
      <Routes>
         <Route path="/" element={<Form login={login}/>} /> 
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
