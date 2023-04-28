const validation=(userData)=>{
const errors={};
if(!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email=('el usuario tiene que ser un email');
  }
  if(!userData.email){
    errors.email="debe ingresar un emil"
  }
  if(userData.email.length>35){
    errors.email="el número de caracteres no puede ser mayor a 35"
  }

  //password
  if (!/.*[0-9].*/.test(userData.password)) {
    errors.password = "La contraseña ingresada debe contener minimo un número";
 }
 if(userData.password.length<6 || userData.password.length >10){
    errors.password="Los caracteres de la contraseña no pueden ser menor a 6 y mayor a 10"
 }

 return errors;



}
export default validation;

  