import style from "../estilos/Forms.module.css";

import { useState } from "react";
import validation from "./recursos/validation";


const Form = ({login})=>{
    
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });

    const [errors,setErrors]=useState({})

    
    

    const handleChange=(event)=>{
        setUserData({...userData,[event.target.name]: event.target.value})
        
        setErrors(validation({
            ...userData,[event.target.name]: event.target.value
        }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        login(userData);
    }
 
return (
    
    <form onSubmit={handleSubmit} className={style.formulario}>
    {/*  <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt="Logo"
          className={style.logo}
        /> */}
        
        <div className={style.props}>
            
    <label htmlFor="email">Email:</label><br />

    <input type="text" placeholder="daniel@gmail.com" name="email" value={userData.email} onChange={handleChange} />
    {errors.email && <p>{errors.email}</p>}
    <br />


    <label htmlFor="password">Password:</label><br />

    <input type="text" placeholder="santafe1234" name="password" value={userData.password}onChange={handleChange}/>
    {errors.password && <p>{errors.password}</p>}
    <br />
    </div>
    <button >Submit</button>
    
    </form>
);
};
export default Form;

