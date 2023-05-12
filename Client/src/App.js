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
  /*  const email = 'daniel@gmail.com';

  const password = 'santafe10';  */



async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try {
    const { data } = await axios(URL + `?email=${email}&password=${password}`);
    const { access } = data;
    setAccess(access);
    access && navigate('/home');
  } catch (error) {
    console.error(error);
  }
}


/* function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(access);
     access && navigate('/home');
  });
} */
useEffect(()=>{
   !access&&navigate("/") 
}, [access, navigate])


  async function onSearch(id) {
  try {
    const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
    if (data.name) {
      const idExists = characters.some((char) => char.id === data.id);
      if (idExists) {
        window.alert("¡Este personaje ya ha sido agregado!");
      } else {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } else {
      /*  window.alert("¡No hay personajes con este ID!");  */ 
    } 
  } catch (error) {
    window.alert("Error: ¡No hay personajes con este ID! o ¡Este personaje ya ha sido agregado!");
  }
}

  /* function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // Verificar si el ID ya está en el arreglo
          const idExists = characters.some((char) => char.id === data.id);
          if (idExists) {
            window.alert("¡Este personaje ya ha sido agregado!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
         } else {
            /*  window.alert("¡No hay personajes con este ID!");  */ 
       /*  } 
      })
       .catch((error) => {
        window.alert("Error: ¡No hay personajes con este ID! o ¡Este personaje ya ha sido agregado!");
      }); 
  } */ 
  
  
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
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;

