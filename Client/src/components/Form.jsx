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
     <img
          src="https://i.pinimg.com/564x/bf/c8/aa/bfc8aa260765a6833899791d3ee1d416.jpg"
          alt="Logo"
          className={style.logo}
            height="400px" width="300px"          /> 
        
        <div className={style.props}>
            
    <label htmlFor="email">Email:</label><br />

    <input type="text" placeholder="daniel@gmail.com" name="email" value={userData.email} onChange={handleChange} />
    {errors.email && <p>{errors.email}</p>}
    <br />


    <label htmlFor="password">Password:</label><br />

    <input type="password" placeholder="santafe10" name="password" value={userData.password}onChange={handleChange}/>
    {errors.password && <p>{errors.password}</p>}
    <br />
    <button >Submit</button>
    </div>
    
   
    
    </form>
);
};
export default Form;

