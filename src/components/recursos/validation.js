const validation=(userData)=>{
const errors={};
if(!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email=('El usuario tiene que ser un email');
  }
  if(!userData.email){
    errors.email="Debe ingresar un emil"
  }
  if(userData.email.length>35){
    errors.email="no puede ser mayor a 35 caracteres."
  }

  //password
  if (!/.*[0-9].*/.test(userData.password)) {
    errors.password = "Minimo un número.";
 }
 if(userData.password.length<6 || userData.password.length >10){
    errors.password="Contraseña entre 6 y 10 caracteres."
 }

 return errors;



}
export default validation;

  